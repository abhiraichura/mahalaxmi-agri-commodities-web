import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Mahalaxmi Logo" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className="text-2xl font-bold tracking-tight text-brand-dark">Mahalaxmi</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-brand-pink ${
                location.pathname === link.path ? 'text-brand-pink' : 'text-brand-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact" 
          className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold shadow-agency-pink hover:scale-105 transition-transform duration-300 hidden sm:block"
        >
          Trade Desk
        </Link>
      </div>
    </motion.nav>
  );
};
