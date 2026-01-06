import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://formspree.io/f/mdakzbvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form.");
        }
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Network connection error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="bg-midnight py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-ash text-lg">We are here to assist you with your luxury grooming needs.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Form Section */}
          <div className="bg-midnight p-8 md:p-10 rounded-xl border border-white/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">Message Sent!</h3>
                  <p className="text-ash mb-8">Thank you for contacting Salon Studio. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-transparent border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white hover:text-charcoal transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-serif text-white mb-6">Send a Message</h2>
                  
                  {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-4 rounded-lg mb-6 flex items-start text-sm">
                      <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="text-sm text-gold uppercase font-bold tracking-wider block mb-2">Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold outline-none transition-colors" 
                        placeholder="Your Full Name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-gold uppercase font-bold tracking-wider block mb-2">Email</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold outline-none transition-colors" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm text-gold uppercase font-bold tracking-wider block mb-2">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold outline-none h-32 transition-colors resize-none" 
                        placeholder="How can we help you today?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-gold text-charcoal font-bold text-lg py-4 rounded-full hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin w-5 h-5" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Information */}
          <div className="space-y-12 flex flex-col justify-center py-4">
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-midnight border border-white/10 rounded-full flex items-center justify-center text-gold mr-6 flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 shadow-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-xl mb-2">Phone & WhatsApp</h3>
                <p className="text-ash mb-1 hover:text-gold transition-colors">
                  <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
                </p>
                <p className="text-ash hover:text-gold transition-colors">
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer">{CONTACT_INFO.whatsappDisplay}</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-midnight border border-white/10 rounded-full flex items-center justify-center text-gold mr-6 flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-xl mb-2">Location</h3>
                <p className="text-ash max-w-xs leading-relaxed">
                  <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                    {CONTACT_INFO.address}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-14 h-14 bg-midnight border border-white/10 rounded-full flex items-center justify-center text-gold mr-6 flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-xl mb-2">Email</h3>
                <p className="text-ash hover:text-gold transition-colors">
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;