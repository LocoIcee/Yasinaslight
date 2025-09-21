import Link from 'next/link';

export const metadata = {
  title: "Thank You | Yasina's Light",
  description: "Payment confirmation and next steps after completing your purchase with Yasina's Light.",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <section className="py-16 text-center relative overflow-hidden hero-gradient-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/assets/sacred-geometry.png)",
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-heading text-neutral mb-4">Payment Complete</h1>
          <p className="text-lg text-neutral-bright max-w-2xl mx-auto">
            Thank you for your purchase. Your order has been received and we&apos;ll follow up shortly with next steps.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-soft">
            <h2 className="text-2xl font-heading text-primary mb-4">What Happens Next</h2>
            <ul className="space-y-4 text-body">
              <li>
                <span className="font-semibold text-primary">Check your inbox:</span> You&apos;ll receive an email receipt from Square with a summary of your order.
              </li>
              <li>
                <span className="font-semibold text-primary">Personal follow-up:</span> Yasina will reach out within 1-2 business days to confirm shipping details or schedule services.
              </li>
              <li>
                <span className="font-semibold text-primary">Questions?</span> Reply to the email receipt or contact us directly and we&apos;ll be happy to help.
              </li>
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/products"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-neutral transition hover:opacity-90"
              >
                Continue shopping
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-secondary text-neutral transition hover:opacity-90"
              >
                Contact support
              </Link>
            </div>
          </div>

          <aside className="bg-white/80 rounded-xl shadow-sm p-6 flex flex-col gap-4 border border-neutral-soft">
            <div>
              <h3 className="text-lg font-heading text-primary mb-2">Need assistance?</h3>
              <p className="text-sm text-body">
                Email <a className="text-secondary underline" href="mailto:info@yasinaslight.com">info@yasinaslight.com</a>
              </p>
            </div>
            <div className="bg-primary-tint rounded-lg p-4 border border-primary-soft">
              <h4 className="text-base font-heading text-primary mb-1">Stay aligned</h4>
              <p className="text-sm text-body">
                Explore our services and classes to keep your energy supported between sessions.
              </p>
              <Link href="/services" className="mt-3 inline-flex text-sm text-secondary underline">
                View services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
