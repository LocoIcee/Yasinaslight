// src/components/website/auth/LoginButton.jsx
import React from 'react';
import { Button } from '../../../components/ui/button';
import { LogIn } from 'lucide-react';
import { useNextAuth } from '../../../contexts/NextAuthContext';

/**
 * Login button component using NextAuth
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant='default'] - Button variant
 * @param {string} [props.size='default'] - Button size
 * @returns {React.ReactNode}
 */
const LoginButton = ({ className, variant = 'default', size = 'default' }) => {
  const { signIn, loading, error } = useNextAuth();

  const handleLogin = async () => {
    try {
      await signIn();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <Button
        onClick={handleLogin}
        className={className}
        variant={variant}
        size={size}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Signing in...
          </>
        ) : (
          <>
            <LogIn className="mr-2 h-4 w-4" />
            Sign in with Google
          </>
        )}
      </Button>
      
      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default LoginButton;