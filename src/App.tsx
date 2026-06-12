import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  // We can safely useLocation here because src/main.tsx provides the Router context
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white flex flex-col pt-24">
        <Navbar />
        
        <main className="flex-grow">
          {/* AnimatePresence allows components to animate out before unmounting */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<div className="p-24 text-center text-4xl font-bold text-brand-slate">Services Page Coming Soon</div>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="bg-brand-light py-12 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-brand-muted text-sm font-medium">
            <p>© {new Date().getFullYear()} Mahalaxmi Agri Commodities Limited.</p>
            <p>Rajkot, Gujarat, India</p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}
