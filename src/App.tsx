import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col pt-24">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<div className="p-24 text-center text-4xl font-bold">Services Page Coming Soon</div>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <footer className="bg-brand-light py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-brand-muted text-sm font-medium">
              <p>© {new Date().getFullYear()} Mahalaxmi Agri Commodities Limited.</p>
              <p>Rajkot, Gujarat, India</p>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}
