import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';

export const runtime = 'nodejs';

const SQUARE_API_BASE_URL = process.env.SQUARE_API_BASE_URL || 'https://connect.squareup.com';
const SQUARE_API_VERSION = process.env.SQUARE_API_VERSION || '2024-09-19';
const DEFAULT_CURRENCY = process.env.SQUARE_CURRENCY || 'CAD';
const DEFAULT_REDIRECT_PATH = '/checkout/success';

export async function POST(request) {
  try {
    const body = await request.json();
    const items = Array.isArray(body?.items) ? body.items : [];

    if (items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const locationId = process.env.SQUARE_LOCATION_ID;

    if (!accessToken || !locationId) {
      return NextResponse.json({ error: 'Square integration is not configured.' }, { status: 500 });
    }

    const origin = body?.origin || request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const redirectUrl = process.env.SQUARE_CHECKOUT_REDIRECT_URL || `${origin}${DEFAULT_REDIRECT_PATH}`;

    const lineItems = [];

    for (const item of items) {
      if (typeof item?.price !== 'number' || typeof item?.quantity !== 'number') {
        return NextResponse.json({ error: 'Invalid cart item. Prices and quantities must be numeric.' }, { status: 400 });
      }

      if (item.quantity <= 0) {
        return NextResponse.json({ error: 'Item quantity must be at least 1.' }, { status: 400 });
      }

      const amount = Math.round(item.price * 100);
      if (amount <= 0) {
        return NextResponse.json({ error: 'Item price must be greater than 0.' }, { status: 400 });
      }

      lineItems.push({
        name: item.optionName ? `${item.name} – ${item.optionName}` : item.name,
        quantity: String(item.quantity),
        base_price_money: {
          amount,
          currency: DEFAULT_CURRENCY,
        },
      });
    }

    const payload = {
      idempotency_key: randomUUID(),
      order: {
        location_id: locationId,
        line_items: lineItems,
      },
      checkout_options: {
        redirect_url: redirectUrl,
        ask_for_shipping_address: true,
      },
    };

    const response = await fetch(`${SQUARE_API_BASE_URL}/v2/online-checkout/payment-links`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Square-Version': SQUARE_API_VERSION,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const message = data?.errors?.[0]?.detail || 'Square checkout could not be created.';
      return NextResponse.json({ error: message }, { status: response.status });
    }

    const checkoutUrl = data?.payment_link?.url;

    if (!checkoutUrl) {
      return NextResponse.json({ error: 'Square did not return a checkout URL.' }, { status: 500 });
    }

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('[Square Checkout] Unexpected error', error);
    return NextResponse.json({ error: 'Unexpected error starting checkout.' }, { status: 500 });
  }
}
