// src/components/website/auth/NextAuthProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNextAuth } from '../../../contexts/NextAuthContext';

/**
 * Protected Route component that redirects to login page if user is not authenticated
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render when authenticated
 * @param {string} [props.redirectTo='/login'] - Path to redirect when not authenticated
 * @returns {React.ReactNode}
 */
const NextAuthProtectedRoute = ({ children, redirectTo = '/Yasinaslight/login' }) => {
  const { isAuthenticated, loading } = useNextAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
        <span className="ml-3">Verifying authentication...</span>
      </div>
    );
  }
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }
  
  // Render children if authenticated
  return children;
};

export default NextAuthProtectedRoute;