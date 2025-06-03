// src/components/website/auth/LogoutButton.jsx
import React from 'react';
import { Button } from '../../../components/ui/button';
import { LogOut } from 'lucide-react';
import { useNextAuth } from '../../../contexts/NextAuthContext';

/**
 * Logout button component using NextAuth
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant='outline'] - Button variant
 * @param {string} [props.size='default'] - Button size
 * @returns {React.ReactNode}
 */
const LogoutButton = ({ className, variant = 'outline', size = 'default' }) => {
  const { signOut, user } = useNextAuth();

  const handleLogout = () => {
    signOut();
  };

  if (!user) {
    return null;
  }

  return (
    <Button
      onClick={handleLogout}
      className={className}
      variant={variant}
      size={size}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </Button>
  );
};

export default LogoutButton;