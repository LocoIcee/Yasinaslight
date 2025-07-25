'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  const { currentUser, signInWithGoogle, error } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // redirect destination
  const from = searchParams.get("from") || "/";

  // If user is already logged in, redirect them immediately
  useEffect(() => {
    if (currentUser) {
      router.replace(from);
    }
  }, [currentUser, from, router]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      router.replace(from);
    } catch (error) {
      console.error("Login error:", error);
      // handled by context
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#563D7C' }}>
            Sign In
          </h1>
          <p className="text-gray-600 mt-2">
            Sign in to access the calendar and schedule your appointments
          </p>
        </div>

        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}

        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-4 bg-purple-600 hover:bg-purple-700"
        >
          <FaGoogle />
          <span>Sign in with Google</span>
        </Button>

        <div className="mt-6 text-center text-gray-600">
          <p>
            By signing in, you agree to share your Google Calendar information with our application.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#563D7C' }}>
          Why Sign In?
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>View and manage your personal calendar</li>
          <li>Schedule new appointments and events</li>
          <li>Receive reminders for upcoming events</li>
          <li>Sync with your Google Calendar</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginPage;
