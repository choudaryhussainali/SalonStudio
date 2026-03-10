import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  MEN_SERVICES, 
  WOMEN_SERVICES, 
  MASSAGE_SERVICES,
  PACKAGES, 
  MEN_DEALS, 
  WOMEN_HAIR_DEALS, 
  WOMEN_FACE_DEALS 
} from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Check, Loader2 } from 'lucide-react';
import { Service } from '../types';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialService = searchParams.get('service');
  const initialCategory = searchParams.get('category') as 'Men' | 'Women' | 'Massage' || 'Men';

  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    email: string;
    serviceCategory: 'Men' | 'Women' | 'Massage';
    serviceNames: string[];
    date: string;
    time: string;
    notes: string;
  }>({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: initialCategory,
    serviceNames: initialService ? [initialService] : [],
    date: '',
    time: '',
    notes: ''
  });

  // Update form if URL params change
  useEffect(() => {
    const service = searchParams.get('service');
    const category = searchParams.get('category') as 'Men' | 'Women' | 'Massage';
    if (service) {
      setFormData(prev => ({ 
        ...prev, 
        serviceNames: prev.serviceNames.includes(service) ? prev.serviceNames : [...prev.serviceNames, service],
        serviceCategory: category || prev.serviceCategory
      }));
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Prepare data based on category
  const regularServices = formData.serviceCategory === 'Men' 
    ? MEN_SERVICES 
    : formData.serviceCategory === 'Women' 
      ? WOMEN_SERVICES 
      : MASSAGE_SERVICES;
  
  const deals = formData.serviceCategory === 'Men' 
    ? MEN_DEALS 
    : formData.serviceCategory === 'Women' 
      ? [...WOMEN_HAIR_DEALS, ...WOMEN_FACE_DEALS] 
      : [];

  // --- NEW EID DEALS LOGIC ---
  const eidDeals = formData.serviceCategory === 'Men'
    ? Array.from({ length: 8 }).map((_, i) => ({
        id: `eid_m_${i+1}`,
        category: 'Men' as const,
        subcategory: 'Eid Deal',
        title: `Men's Eid Deal ${i + 1}`,
        description: 'See flyer for details',
        price: 'Festive Price',
        duration: '60 mins'
    }))
    : formData.serviceCategory === 'Women'
    ? Array.from({ length: 9 }).map((_, i) => ({
        id: `eid_w_${i+1}`,
        category: 'Women' as const,
        subcategory: 'Eid Deal',
        title: `Women's Eid Deal ${i + 1}`,
        description: 'See flyer for details',
        price: 'Festive Price',
        duration: '90 mins'
    }))
    : [];
  // ----------------------------

  // Adapt packages to Service-like structure
  const packages = PACKAGES.filter(p => p.category === formData.serviceCategory).map(p => ({
    id: p.id,
    category: p.category as 'Men' | 'Women' | 'Massage',
    subcategory: 'Package',
    title: p.title,
    description: p.description,
    price: p.price,
    duration: '120 mins' // Default duration assumption for packages
  }));

  // Include eidDeals in allOptions for duration calculation
  const allOptions: (Service | typeof packages[0] | typeof eidDeals[0])[] = [...packages, ...eidDeals, ...deals, ...regularServices];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (serviceTitle: string) => {
    setFormData(prev => {
      const isSelected = prev.serviceNames.includes(serviceTitle);
      const newServices = isSelected
        ? prev.serviceNames.filter(s => s !== serviceTitle)
        : [...prev.serviceNames, serviceTitle];
      
      return { ...prev, serviceNames: newServices };
    });
  };

  const handleBookAnother = () => {
    setSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceCategory: 'Men',
      serviceNames: [],
      date: '',
      time: '',
      notes: ''
    });
    navigate('/book');
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.fullName || !formData.phone || !formData.date || !formData.time) {
        throw new Error("Please fill in all required fields.");
      }
      
      if (formData.serviceNames.length === 0) {
        throw new Error("Please select at least one service, deal, or package.");
      }

      // Format time to 12-hour AM/PM
      const formatTime = (timeStr: string) => {
        if (!timeStr) return '';
        const [hours, minutes] = timeStr.split(':');
        const hour = parseInt(hours, 10);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minutes} ${ampm}`;
      };
      
      // Calculate estimated duration
      const selectedServiceDetails = allOptions.filter(s => formData.serviceNames.includes(s.title));
      const totalDuration = selectedServiceDetails.reduce((acc, curr) => {
        const mins = parseInt(curr.duration) || 0;
        return acc + mins;
      }, 0);
      
      // Construct a structured payload for Formspree
      const payload = {
        _subject: `New Appointment: ${formData.fullName} - ${formData.date}`,
        _replyto: formData.email || undefined,
        
        "___ Client Information ___": "",
        "Client Name": formData.fullName,
        "Phone Number": formData.phone,
        "Email": formData.email || "Not Provided",
        
        "___ Appointment Details ___": "",
        "Date": formData.date,
        "Time": formatTime(formData.time),
        "Service Category": formData.serviceCategory,
        
        "___ Services ___": "",
        "Selected Items": formData.serviceNames.join(", "),
        "Estimated Duration": totalDuration > 0 ? `${totalDuration} mins (approx)` : "Varies",
        
        "___ Additional Info ___": "",
        "Special Notes": formData.notes || "None"
      };

      const response = await fetch("https://formspree.io/f/mykzdrbr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSuccess(true);
        window.scrollTo(0, 0);
      } else {
        const data = await response.json();
        if (data.errors) {
          throw new Error(data.errors.map((err: any) => err.message).join(", "));
        } else {
          throw new Error("Oops! There was a problem submitting your booking.");
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderServiceItem = (item: { id: string, title: string, price: string }) => {
    const isSelected = formData.serviceNames.includes(item.title);
    return (
      <div 
        key={item.id} 
        onClick={() => toggleService(item.title)}
        className={`cursor-pointer p-3 rounded-lg border transition-all duration-200 flex items-center justify-between group ${
          isSelected 
            ? 'bg-gold/10 border-gold' 
            : 'bg-white/5 border-transparent hover:border-white/20'
        }`}
      >
        <div className="flex flex-col">
          <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-gray-300 group-hover:text-white'}`}>
            {item.title}
          </span>
          <span className="text-xs text-gold/80 font-mono mt-1">{item.price}</span>
        </div>
        {isSelected && <Check className="w-4 h-4 text-gold" />}
      </div>
    );
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-midnight p-10 rounded-2xl border border-gold/20 text-center max-w-lg w-full shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Booking Confirmed!</h2>
          <p className="text-ash mb-8">Thank you, {formData.fullName}. We have received your booking request for {formData.date} at {formData.time}. A confirmation email has been sent to us, and we will contact you shortly if we need any further details.</p>
          <div className="space-y-4">
             <button onClick={handleBookAnother} className="w-full bg-gold text-charcoal font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">Book Another</button>
             <button onClick={() => navigate('/')} className="w-full bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">Return Home</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Book Appointment</h1>
          <p className="text-ash">Reserve your luxury experience at Salon Studio.</p>
        </div>

        <div className="bg-midnight p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg mb-8 flex items-center">
              <AlertCircle className="w-5 h-5 mr-3" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm text-gold uppercase font-bold tracking-wider">Full Name *</label>
                <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gold uppercase font-bold tracking-wider">Phone Number *</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors" placeholder="0300 1234567" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm text-gold uppercase font-bold tracking-wider">Email (Optional)</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gold uppercase font-bold tracking-wider">Category</label>
                <select name="serviceCategory" value={formData.serviceCategory} onChange={handleChange} className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors">
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Massage">Massage</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gold uppercase font-bold tracking-wider">Select Services / Packages *</label>
              <div className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white max-h-96 overflow-y-auto custom-scrollbar">
                
                {/* EID DEALS SECTION */}
                {eidDeals.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-gold text-xs font-bold uppercase tracking-wider mb-3 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-10 py-2 border-b border-white/5">
                      🌙 Festive Eid Deals
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {eidDeals.map(renderServiceItem)}
                    </div>
                  </div>
                )}

                {/* Packages Section */}
                {packages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-gold text-xs font-bold uppercase tracking-wider mb-3 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-10 py-2 border-b border-white/5">
                      Signature Packages
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {packages.map(renderServiceItem)}
                    </div>
                  </div>
                )}

                {/* Deals Section */}
                {deals.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-gold text-xs font-bold uppercase tracking-wider mb-3 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-10 py-2 border-b border-white/5">
                      Exclusive Deals
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {deals.map(renderServiceItem)}
                    </div>
                  </div>
                )}

                {/* Regular Services Section */}
                {regularServices.length > 0 && (
                  <div>
                    <h3 className="text-gold text-xs font-bold uppercase tracking-wider mb-3 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-10 py-2 border-b border-white/5">
                      Individual Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {regularServices.map(renderServiceItem)}
                    </div>
                  </div>
                )}
                
                {regularServices.length === 0 && packages.length === 0 && deals.length === 0 && eidDeals.length === 0 && (
                  <div className="text-center py-8 text-gray-500 italic">
                    No services found for this category.
                  </div>
                )}

              </div>
              <p className="text-xs text-gray-500 mt-2">Tap items to select multiple services, deals, or packages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm text-gold uppercase font-bold tracking-wider">Date *</label>
                <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gold uppercase font-bold tracking-wider">Time *</label>
                <input required name="time" value={formData.time} onChange={handleChange} type="time" className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gold uppercase font-bold tracking-wider">Notes</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full bg-charcoal border border-white/10 rounded-lg p-4 text-white focus:border-gold focus:outline-none transition-colors h-32" placeholder="Any special requests?" />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-gold text-charcoal font-bold text-lg py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                  Processing...
                </>
              ) : 'Confirm Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
