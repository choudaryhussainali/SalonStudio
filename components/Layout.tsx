import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-charcoal/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://lh3.googleusercontent.com/kWLSCqTAI5aF66Ms9kiz6hSZY9SIixRic5dkrvb2WE7XtHVsYrsgunBL_CY7GPTk2wnZSto_tKyJHNePmw=s265-w265-h265" 
            alt="Salon Studio"
            className={`transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} md:w-14 md:h-14 object-contain`}
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest uppercase leading-none">
              Salon<span className="text-gold">Studio</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-sans tracking-wide transition-colors duration-300 hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-ash'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/book')}
            className="bg-gold text-charcoal px-6 py-2 rounded-full font-semibold text-sm hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-midnight/95 backdrop-blur-xl border-t border-white/5 flex flex-col items-center py-8 space-y-6 shadow-2xl h-screen">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-serif ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/book')}
            className="bg-gold text-charcoal px-8 py-3 rounded-full font-bold uppercase tracking-wider"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-midnight border-t border-white/5 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://lh3.googleusercontent.com/kWLSCqTAI5aF66Ms9kiz6hSZY9SIixRic5dkrvb2WE7XtHVsYrsgunBL_CY7GPTk2wnZSto_tKyJHNePmw=s265-w265-h265" 
                alt="Salon Studio"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-white tracking-widest uppercase leading-none">
                  Salon<span className="text-gold">Studio</span>
                </h3>
              </div>
            </div>
            <p className="text-ash text-sm leading-relaxed mb-6">
              Where luxury meets precision. Experience world-class grooming in the heart of Lahore DHA Phase 5.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/salonstudio5/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/salonstudiouxs/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-ash">
              <li><Link to="/services" className="hover:text-gold transition-colors">Services Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Style Gallery</Link></li>
              <li><Link to="/book" className="hover:text-gold transition-colors">Book Appointment</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-ash">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Hours</h4>
            <ul className="space-y-2 text-sm text-ash">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Sun</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Salon Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 md:mr-24">
             <a 
               href="https://choudaryhussainali.online/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gold transition-colors opacity-40 hover:opacity-100 text-[10px] tracking-widest uppercase"
             >
               Developed by CHA
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      <Navbar />
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <div className="absolute right-full mr-4 bg-white text-charcoal px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Book on WhatsApp
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
};