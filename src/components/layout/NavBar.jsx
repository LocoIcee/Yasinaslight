'use client';
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ImagePlaceholders from "@/utils/ImagePlaceholders";
import CartButton from "@/components/layout/CartButton";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";

const NavBar = () => {
  const { currentUser, signOut } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { name: "HOME", path: "/", hasDropdown: false },
    { name: "ABOUT", path: "/about", hasDropdown: false },
    { name: "SERVICES", path: "/services", hasDropdown: true },
    { name: "PRODUCTS", path: "/products", hasDropdown: true },
    { name: "CLASSES & EVENTS", path: "/classes", hasDropdown: false },
    { name: "CONTACT", path: "/contact", hasDropdown: false },
  ];

  const combinedNavItems = [
    ...navItems,
    ...(currentUser ? [{ name: "CALENDAR", path: "/calendar", hasDropdown: false }] : []),
  ];

  return (
    <header className="w-full bg-primary text-neutral shadow-navbar">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <ImagePlaceholders.Logo width="100%" height="100%" />
          </div>
          <span className="text-xl hidden md:block font-heading text-neutral">
            Yasina's Light
          </span>
        </div>

        <div className="relative md:static">
          <button
            className={`md:hidden flex items-center px-3 py-2 border rounded text-white focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors ${
              isMobileMenuOpen ? 'bg-white/20 border-white/0' : 'border-white'
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
          >
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            id="primary-navigation"
            className="absolute top-[calc(100%+0.5rem)] left-1/2 w-[calc(80vw-2rem)] -translate-x-1/2 z-30 md:top-auto md:left-auto md:w-auto md:translate-x-0 md:static md:z-auto"
          >
            <ul
              className={`w-full bg-primary/95 text-neutral backdrop-blur-2xl md:bg-transparent md:text-inherit md:backdrop-blur-0 rounded-2xl md:rounded-none shadow-2xl md:shadow-none border border-white/30 md:border-0 overflow-hidden transform origin-top transition-all duration-200 md:transition-none ${
                isMobileMenuOpen
                  ? 'flex flex-col py-4 opacity-100 pointer-events-auto'
                  : 'hidden max-h-0 py-0 opacity-0 pointer-events-none'
              } md:flex md:flex-row md:items-center md:space-x-6 md:opacity-100 md:pointer-events-auto md:max-h-none md:py-0`}
            >
              {combinedNavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="relative block px-4 py-3 md:px-2 md:py-2 text-sm hover:bg-white/15 rounded-xl md:rounded-none transition-all group nav-link"
                    onClick={() => {
                      if (isMobileMenuOpen) {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown}
                    <span className="block md:hidden text-white/70 text-xs">
                      {/* keeps spacing consistent on mobile */}
                    </span>
                    <div className="absolute bottom-1 left-4 w-0 h-0.5 bg-white/80 group-hover:w-[calc(100%-2rem)] transition-all duration-300 md:bottom-0 md:left-0 md:bg-white nav-link-underline"></div>
                  </Link>
                </li>
              ))}

              <CartButton />

              {!currentUser ? (
                <li className="px-4 py-2 md:p-0">
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-1 text-white hover:text-primary transition-colors duration-200 w-full md:w-auto justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <LogIn size={16} />
                      <span>Login</span>
                    </Button>
                  </Link>
                </li>
              ) : (
                <li className="flex flex-col md:flex-row md:items-center px-4 py-2 md:p-0 space-y-2 md:space-y-0">
                  <div className="flex items-center md:mr-2">
                    <User size={16} className="mr-1 text-neutral" />
                    <span className="text-xs truncate max-w-[140px] text-neutral">
                      {currentUser.displayName || currentUser.email.split('@')[0]}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center space-x-1 text-neutral justify-center"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
