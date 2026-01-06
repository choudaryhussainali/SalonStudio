import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="bg-midnight py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif text-white mb-6">Our Location</h1>
          <p className="text-ash">Visit us in the heart of DHA Phase 5.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Card */}
          <div className="bg-midnight p-8 rounded-xl border border-white/5 space-y-8 h-fit">
             <div>
               <h3 className="text-gold font-bold uppercase tracking-wider mb-4 flex items-center">
                 <MapPin className="mr-2" /> Address
               </h3>
               <p className="text-white leading-relaxed">{CONTACT_INFO.address}</p>
               <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="text-sm text-gray-400 mt-2 inline-block hover:text-gold underline">Get Directions</a>
             </div>
             <div>
               <h3 className="text-gold font-bold uppercase tracking-wider mb-4 flex items-center">
                 <Phone className="mr-2" /> Contact
               </h3>
               <p className="text-white">{CONTACT_INFO.phone}</p>
               <p className="text-white">{CONTACT_INFO.whatsappDisplay}</p>
             </div>
             <div>
               <h3 className="text-gold font-bold uppercase tracking-wider mb-4 flex items-center">
                 <Clock className="mr-2" /> Business Hours
               </h3>
               <ul className="text-white space-y-2 text-sm">
                 <li className="flex justify-between"><span>Mon - Sun</span> <span>11:00 AM - 10:00 PM</span></li>
               </ul>
             </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-2 h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.469796030998!2d74.39955731510344!3d31.45638898139049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190606d5027581%3A0x64761008709e9e1e!2sSmokeshub%20DHA!5e0!3m2!1sen!2s!4v1645432854321!5m2!1sen!2s" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Salon Studio Location"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;