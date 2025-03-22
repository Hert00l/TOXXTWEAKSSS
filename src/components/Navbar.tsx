import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Benefits', href: '#features' },
  { label: 'Download', href: '#download' },
  { label: 'Pricing', href: '/premium' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsOpen(false);

    if (href.startsWith('#')) {
      const currentPath = window.location.pathname;

      if (currentPath !== '/') {
        window.location.href = `/${href}`;
      } else {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const navbarHeight = 80;
            const elementTop =
              element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementTop - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-10 w-10 text-purple-500" />
              <span className="ml-3 text-2xl font-bold text-white">ToxTweak</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.href);
                    }}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/50 backdrop-blur-md"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-lg font-medium transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-lg font-medium transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
