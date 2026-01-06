
import { Service, GalleryItem, Testimonial } from './types';

export const COLORS = {
  charcoal: '#0F1115',
  midnight: '#1C1F26',
  gold: '#C8A35F',
  ivory: '#F7F7F7',
  ash: '#DADADA',
};

export const CONTACT_INFO = {
  address: "Plaza No 69cca, 1st Floor, DHA Phase 5 Sector C, Lahore",
  phone: "0326-4796290",
  whatsapp: "+923264796290", // Normalized for links
  whatsappDisplay: "+92 326 4796290",
  email: "salonstudiouxs@gmail.com",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Smokeshub+DHA+Phase+5+Lahore"
};

export const MEN_SERVICES: Service[] = [
  // Hair
  { id: 'm_h1', category: 'Men', subcategory: 'Hair', title: 'Simple Hair Cut', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 1500', duration: '30 mins' },
  { id: 'm_h2', category: 'Men', subcategory: 'Hair', title: 'Fade Cut', description: 'Stylist | Senior Stylist', price: 'Rs. 1500 | Rs. 2000', duration: '45 mins' },
  { id: 'm_h3', category: 'Men', subcategory: 'Hair', title: 'Hair Trimming', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 1500', duration: '30 mins' },
  { id: 'm_h4', category: 'Men', subcategory: 'Hair', title: 'Kids Hair Cut', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 1500', duration: '30 mins' },
  { id: 'm_h5', category: 'Men', subcategory: 'Hair', title: 'Head Wash With Blow Dry', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 1000', duration: '20 mins' },
  
  // Beard
  { id: 'm_b1', category: 'Men', subcategory: 'Beard', title: 'Simple Beard', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 700', duration: '20 mins' },
  { id: 'm_b2', category: 'Men', subcategory: 'Beard', title: 'Fade Beard', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 1000', duration: '30 mins' },
  { id: 'm_b3', category: 'Men', subcategory: 'Beard', title: 'Shave', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 1000', duration: '20 mins' },

  // Styling
  { id: 'm_s1', category: 'Men', subcategory: 'Styling', title: 'Hair Styling', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 1000', duration: '15 mins' },
  { id: 'm_s2', category: 'Men', subcategory: 'Styling', title: 'Fiber Styling', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 1500', duration: '20 mins' },
  { id: 'm_s3', category: 'Men', subcategory: 'Styling', title: 'Groom Styling', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 2000', duration: '30 mins' },

  // Massage
  { id: 'm_msg1', category: 'Men', subcategory: 'Massage', title: 'Massage', description: 'Relaxing Body Massage', price: 'Rs. 7000', duration: '60 mins' },

  // Hair Colour (Basic)
  { id: 'm_c1', category: 'Men', subcategory: 'Color', title: 'Beard Hair Colour', description: 'Standard Application', price: 'Rs. 500', duration: '30 mins' },
  { id: 'm_c2', category: 'Men', subcategory: 'Color', title: 'Head Hair Colour', description: 'Standard Application', price: 'Rs. 1000', duration: '45 mins' },

  // Brand Colours
  { id: 'm_bc1', category: 'Men', subcategory: 'Color Brands', title: 'Regular Colour', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 1000', duration: '45 mins' },
  { id: 'm_bc2', category: 'Men', subcategory: 'Color Brands', title: 'Keune', description: 'Stylist | Senior Stylist', price: 'Rs. 1000 | Rs. 2000', duration: '45 mins' },
  { id: 'm_bc3', category: 'Men', subcategory: 'Color Brands', title: 'Just For Men', description: 'Stylist | Senior Stylist', price: 'Rs. 1500 | Rs. 3000', duration: '45 mins' },
  { id: 'm_bc4', category: 'Men', subcategory: 'Color Brands', title: 'Loreal', description: 'Stylist | Senior Stylist', price: 'Rs. 2000 | Rs. 4000', duration: '45 mins' },
  { id: 'm_bc5', category: 'Men', subcategory: 'Color Brands', title: 'Revlon', description: 'Stylist | Senior Stylist', price: 'Rs. 1500 | Rs. 3500', duration: '45 mins' },

  // Skin Care
  { id: 'm_sk1', category: 'Men', subcategory: 'Skin Care', title: 'Face Polisher', description: 'Skin brightening', price: 'Rs. 1000', duration: '30 mins' },
  { id: 'm_sk2', category: 'Men', subcategory: 'Skin Care', title: 'Full Body Polisher', description: 'Complete exfoliation', price: 'Rs. 5000', duration: '60 mins' },
  { id: 'm_sk3', category: 'Men', subcategory: 'Skin Care', title: 'Full Body Scrub', description: 'Deep cleansing', price: 'Rs. 5000', duration: '60 mins' },
  { id: 'm_sk4', category: 'Men', subcategory: 'Skin Care', title: 'Mani & Pedicure', description: 'Nail and skin care', price: 'Rs. 4000', duration: '45 mins' },

  // Facial
  { id: 'm_f1', category: 'Men', subcategory: 'Facial', title: 'Gold Facial', description: 'Facial | Cleansing', price: 'Rs. 4000 | Rs. 1500', duration: '60 mins' },
  { id: 'm_f2', category: 'Men', subcategory: 'Facial', title: 'Dermacose', description: 'Facial | Cleansing', price: 'Rs. 3000 | Rs. 1000', duration: '60 mins' },
  { id: 'm_f3', category: 'Men', subcategory: 'Facial', title: 'Dr Darma Facial', description: 'Facial | Cleansing', price: 'Rs. 3500 | Rs. 2000', duration: '60 mins' },
  { id: 'm_f4', category: 'Men', subcategory: 'Facial', title: 'Janssen Facial', description: 'Facial | Cleansing', price: 'Rs. 6000 | Rs. 3000', duration: '60 mins' },
  { id: 'm_f5', category: 'Men', subcategory: 'Facial', title: 'Hydra Facial', description: 'Facial | Cleansing', price: 'Rs. 7000 | Rs. 4000', duration: '60 mins' },
];

export const WOMEN_SERVICES: Service[] = [
  // Cuts & Face
  { id: 'w_h1', category: 'Women', subcategory: 'Hair', title: 'Hair Cut', description: 'Stylist | Senior Stylist', price: 'Rs. 2500 | Rs. 4000', duration: '60 mins' },
  { id: 'w_h2', category: 'Women', subcategory: 'Hair', title: 'Hair Trimming', description: 'Stylist | Senior Stylist', price: 'Rs. 2000 | Rs. 3000', duration: '45 mins' },
  { id: 'w_h3', category: 'Women', subcategory: 'Hair', title: 'Kids Hair Cut', description: 'Stylist | Senior Stylist', price: 'Rs. 2000 | Rs. 3000', duration: '45 mins' },
  { id: 'w_h4', category: 'Women', subcategory: 'Hair', title: 'Head Wash With Blow Dry', description: 'Stylist | Senior Stylist', price: 'Rs. 1500 | Rs. 2000', duration: '30 mins' },
  { id: 'w_h5', category: 'Women', subcategory: 'Hair', title: 'Iron', description: 'Stylist | Senior Stylist', price: 'Rs. 2000 | Rs. 3000', duration: '30 mins' },
  { id: 'w_f1', category: 'Women', subcategory: 'Face', title: 'Eye Brows', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 1000', duration: '15 mins' },
  { id: 'w_f2', category: 'Women', subcategory: 'Face', title: 'Upper Lips', description: 'Stylist | Senior Stylist', price: 'Rs. 500 | Rs. 1000', duration: '15 mins' },

  // Hair Treatments (Length Based)
  { id: 'w_tr1', category: 'Women', subcategory: 'Treatments', title: 'Keratin Treatment', description: 'Shoulder: 7k | Blow Sh: 10k | Waist: 14k | Blow W: 16k', price: 'Rs. 7,000 - 16,000', duration: '120 mins' },
  { id: 'w_tr2', category: 'Women', subcategory: 'Treatments', title: 'Xtenso Treatment', description: 'Shoulder: 7k | Blow Sh: 10k | Waist: 14k | Blow W: 15k', price: 'Rs. 7,000 - 15,000', duration: '120 mins' },
  { id: 'w_tr3', category: 'Women', subcategory: 'Treatments', title: 'Rebonding', description: 'Shoulder: 8k | Blow Sh: 11k | Waist: 15k | Blow W: 16k', price: 'Rs. 8,000 - 16,000', duration: '180 mins' },
  { id: 'w_tr4', category: 'Women', subcategory: 'Treatments', title: 'Botox Treatment', description: 'Shoulder: 10k | Blow Sh: 12k | Waist: 16k | Blow W: 18k', price: 'Rs. 10,000 - 18,000', duration: '120 mins' },
  { id: 'w_tr5', category: 'Women', subcategory: 'Treatments', title: 'Base Colour', description: 'Shoulder: 5k | Blow Sh: 7k | Waist: 8k | Blow W: 10k', price: 'Rs. 5,000 - 10,000', duration: '90 mins' },

  // Hair Colouring Options
  { id: 'w_c1', category: 'Women', subcategory: 'Color', title: 'Highlights', description: 'Shoulder: 10k | Blow Sh: 12k | Waist: 16k | Blow W: 18k', price: 'Rs. 10,000 - 18,000', duration: '180 mins' },
  { id: 'w_c2', category: 'Women', subcategory: 'Color', title: 'Balayage', description: 'Shoulder: 11k | Blow Sh: 13k | Waist: 17k | Blow W: 20k', price: 'Rs. 11,000 - 20,000', duration: '180 mins' },
  { id: 'w_c3', category: 'Women', subcategory: 'Color', title: 'Baby Lights', description: 'Shoulder: 8k | Blow Sh: 10k | Waist: 12k | Blow W: 15k', price: 'Rs. 8,000 - 15,000', duration: '180 mins' },
  { id: 'w_c4', category: 'Women', subcategory: 'Color', title: 'Low Lights', description: 'Shoulder: 8k | Blow Sh: 10k | Waist: 13k | Blow W: 16k', price: 'Rs. 8,000 - 16,000', duration: '180 mins' },
  { id: 'w_c5', category: 'Women', subcategory: 'Color', title: 'One Colour', description: 'Shoulder: 8k | Blow Sh: 10k | Waist: 12k | Blow W: 14k', price: 'Rs. 8,000 - 14,000', duration: '120 mins' },

  // Other Hair Treatments
  { id: 'w_ot1', category: 'Women', subcategory: 'Hair Care', title: 'Hair Protein Treatment', description: 'Strengthening treatment', price: 'Rs. 3000', duration: '60 mins' },
  { id: 'w_ot2', category: 'Women', subcategory: 'Hair Care', title: 'Hair Shine & Mask', description: 'Gloss and hydration', price: 'Rs. 2000', duration: '45 mins' },
  { id: 'w_ot3', category: 'Women', subcategory: 'Hair Care', title: 'Oxygenating Treatment', description: 'Scalp revitalization', price: 'Rs. 4000', duration: '60 mins' },

  // Waxing
  { id: 'w_wx1', category: 'Women', subcategory: 'Waxing', title: 'Arms Full', description: 'Full arm waxing', price: 'Rs. 2000', duration: '30 mins' },
  { id: 'w_wx2', category: 'Women', subcategory: 'Waxing', title: 'Legs Full', description: 'Full leg waxing', price: 'Rs. 2500', duration: '40 mins' },
  { id: 'w_wx3', category: 'Women', subcategory: 'Waxing', title: 'Under Arms & Back', description: 'Upper body waxing', price: 'Rs. 3000', duration: '40 mins' },
  { id: 'w_wx4', category: 'Women', subcategory: 'Waxing', title: 'Nose / Ear Wax', description: 'Detail waxing', price: 'Rs. 1000', duration: '15 mins' },
  { id: 'w_wx5', category: 'Women', subcategory: 'Waxing', title: 'Full Body Wax', description: 'Complete waxing package', price: 'Rs. 8000', duration: '90 mins' },

  // Makeup
  { id: 'w_mu1', category: 'Women', subcategory: 'Makeup', title: 'Party Makeup', description: 'Artist | Senior Artist', price: 'Rs. 7000 | Rs. 10000', duration: '60 mins' },
];

export const MASSAGE_SERVICES: Service[] = [
  { id: 'msg_1', category: 'Massage', subcategory: 'Therapy', title: 'Simple Massage', description: 'Quick relaxation session', price: 'Rs. 5000', duration: '40 mins' },
  { id: 'msg_2', category: 'Massage', subcategory: 'Therapy', title: 'Swedish Massage', description: 'Classic full body relaxation', price: 'Rs. 6000', duration: '60 mins' },
  { id: 'msg_3', category: 'Massage', subcategory: 'Therapy', title: 'Deep Tissue Massage', description: 'Intense muscle relief', price: 'Rs. 7000', duration: '60 mins' },
  { id: 'msg_4', category: 'Massage', subcategory: 'Therapy', title: 'Thai Yoga Massage', description: 'Assisted stretching and pressure', price: 'Rs. 8000', duration: '60 mins' },
  { id: 'msg_5', category: 'Massage', subcategory: 'Therapy', title: 'Relaxing Massage', description: 'Stress relief therapy', price: 'Rs. 9000', duration: '60 mins' },
  { id: 'msg_6', category: 'Massage', subcategory: 'Therapy', title: 'Signature Massage', description: 'Premium full body treatment', price: 'Rs. 10000', duration: '90 mins' },
];

export const PACKAGES = [
  // Men Packages
  {
    id: 'mp1',
    title: 'Groom Silver Package',
    category: 'Men',
    description: 'Stylist | Senior',
    services: ['Hair Cut', 'Beard', 'Facial', 'Mani-Pedi', 'Makeup'],
    price: 'Rs. 15,000 | Rs. 20,000',
    originalPrice: '',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/379/418/non_2x/bow-tie-shape-illustration-on-white-background-free-vector.jpg?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mp2',
    title: 'Groom Gold Package',
    category: 'Men',
    description: 'Stylist | Senior',
    services: ['Hair Cut', 'Beard', 'Premium Facial', 'Mani-Pedi', 'Makeup'],
    price: 'Rs. 20,000 | Rs. 25,000',
    originalPrice: '',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/379/418/non_2x/bow-tie-shape-illustration-on-white-background-free-vector.jpg?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mp3',
    title: 'Groom Diamond Package',
    category: 'Men',
    description: 'Stylist | Senior',
    services: ['Hair Cut', 'Beard', 'Luxury Facial', 'Mani-Pedi', 'Makeup'],
    price: 'Rs. 30,000 | Rs. 40,000',
    originalPrice: '',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/379/418/non_2x/bow-tie-shape-illustration-on-white-background-free-vector.jpg?q=80&w=1000&auto=format&fit=crop'
  },
  // Women Bridal Packages
  {
    id: 'wp1',
    title: 'Bridal Silver Package',
    category: 'Women',
    description: 'Stylist | Senior',
    services: ['Makeup', 'Hair Styling', 'Draping', 'Nail Color'],
    price: 'Rs. 30,000 | Rs. 40,000',
    originalPrice: '',
    imageUrl: 'https://s.tmimgcdn.com/scr/1200x627/371600/bridal-dress-logo-vector-illustration-template_371632-original.jpg?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'wp2',
    title: 'Bridal Gold Package',
    category: 'Women',
    description: 'Stylist | Senior',
    services: ['Makeup', 'Hair Styling', 'Draping', 'Nail Art', 'Facial'],
    price: 'Rs. 40,000 | Rs. 50,000',
    originalPrice: '',
    imageUrl: 'https://s.tmimgcdn.com/scr/1200x627/371600/bridal-dress-logo-vector-illustration-template_371632-original.jpg?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'wp3',
    title: 'Bridal Diamond Package',
    category: 'Women',
    description: 'Stylist | Senior',
    services: ['Makeup', 'Hair Styling', 'Draping', 'Nail Art', 'Premium Facial'],
    price: 'Rs. 60,000 | Rs. 80,000',
    originalPrice: '',
    imageUrl: 'https://s.tmimgcdn.com/scr/1200x627/371600/bridal-dress-logo-vector-illustration-template_371632-original.jpg?q=80&w=1000&auto=format&fit=crop'
  }
];

export const MEN_DEALS: Service[] = [
  { id: 'md1', category: 'Men', subcategory: 'Deal', title: 'Deal - 1', description: 'Classic Haircut, Beard, Hot towel, Face Cleansing, Head & Shoulder massage', price: 'Rs. 3,000', duration: '60 mins' },
  { id: 'md2', category: 'Men', subcategory: 'Deal', title: 'Deal - 2', description: 'Classic Haircut, Beard, Whitening Facial, Head & Shoulder massage', price: 'Rs. 4,500', duration: '75 mins' },
  { id: 'md3', category: 'Men', subcategory: 'Deal', title: 'Deal - 3', description: 'Classic Haircut, Beard, Whitening Facial, Premium Manicure pedicure, Foot massage', price: 'Rs. 7,000', duration: '90 mins' },
  { id: 'md4', category: 'Men', subcategory: 'Deal', title: 'Deal - 4', description: 'Whitening Facial, Head hot oiling, Premium Manicure pedicure, Foot massage', price: 'Rs. 5,500', duration: '90 mins' },
  { id: 'md5', category: 'Men', subcategory: 'Deal', title: 'Deal - 5', description: 'Whitening Facial, Haircut beard, Full body massage, Hot towel', price: 'Rs. 9,000', duration: '120 mins' },
  { id: 'md6', category: 'Men', subcategory: 'Deal', title: 'Deal - 6', description: 'Classic Haircut Beard, Whitening Facial, Whitening Mani pedicure, Full body massage, Hot towel', price: 'Rs. 11,000', duration: '150 mins' },
  { id: 'md7', category: 'Men', subcategory: 'Deal', title: 'Deal - 7', description: 'Classic Haircut, Beard, Full body massage, Hot towel', price: 'Rs. 5,500', duration: '90 mins' },
  { id: 'md8', category: 'Men', subcategory: 'Deal', title: 'Premium Deal', description: 'Signature Haircut Beard, Signature Hydra Facial, Signature Mani pedicure, Signature Full body massage, Hot towel', price: 'Rs. 15,000', duration: '180 mins' },
];

export const WOMEN_HAIR_DEALS: Service[] = [
  { id: 'whd1', category: 'Women', subcategory: 'Deal', title: "Hair's Deal - 1 (Shoulder)", description: 'Keratin, One shade colour, Signature Haircut', price: 'Rs. 12,000', duration: '180 mins' },
  { id: 'whd2', category: 'Women', subcategory: 'Deal', title: "Hair's Deal - 2 (Shoulder)", description: 'Keratin, Hair Highlights, Signature Haircut', price: 'Rs. 14,000', duration: '200 mins' },
  { id: 'whd3', category: 'Women', subcategory: 'Deal', title: "Hair's Deal - 3 (Medium)", description: 'Keratin, one Shade colour, Signature Haircut', price: 'Rs. 14,000', duration: '200 mins' },
  { id: 'whd4', category: 'Women', subcategory: 'Deal', title: "Hair's Deal - 4 (Medium)", description: 'Keratin, Hair Highlights, Signature Haircut', price: 'Rs. 18,000', duration: '240 mins' },
  { id: 'whd5', category: 'Women', subcategory: 'Deal', title: "Hair's Deal - 5 (Waist)", description: 'Keratin, One shade colour, Signature Haircut', price: 'Rs. 18,000', duration: '240 mins' },
  { id: 'whd6', category: 'Women', subcategory: 'Deal', title: "Hair's Deal - 6 (Waist)", description: 'Keratin, Hair highlights, Signature Haircut', price: 'Rs. 22,000', duration: '280 mins' },
];

export const WOMEN_FACE_DEALS: Service[] = [
  { id: 'wfd1', category: 'Women', subcategory: 'Deal', title: 'Skin Deal - 1', description: 'Whitening Mani pedicure, Face Cleansing, Two parts Threading', price: 'Rs. 4,500', duration: '60 mins' },
  { id: 'wfd2', category: 'Women', subcategory: 'Deal', title: 'Skin Deal - 2', description: 'Whitening Facial, Hand & Feet polisher, Face Massage, Two parts Threading', price: 'Rs. 4,000', duration: '75 mins' },
  { id: 'wfd3', category: 'Women', subcategory: 'Deal', title: 'Skin Deal - 3', description: 'Whitening Facial, Hand & Feet polisher, Signature Mani pedicure, Two parts Threading', price: 'Rs. 6,000', duration: '90 mins' },
  { id: 'wfd4', category: 'Women', subcategory: 'Deal', title: 'Skin Deal - 4', description: 'Legs wax, Arm wax, Deep cleansing, Two parts Threading', price: 'Rs. 4,000', duration: '60 mins' },
  { id: 'wfd5', category: 'Women', subcategory: 'Deal', title: 'Skin Deal - 5', description: 'Full body wax, Full body whitening Scrub & polisher, Deep Cleansing, Two parts Threading', price: 'Rs. 14,000', duration: '150 mins' },
  { id: 'wfd6', category: 'Women', subcategory: 'Deal', title: 'Skin Deal - 6', description: 'Whitening Hydra Facial, Hand & Feet polisher, Basic Mani pedicure, Hand & Feet Spa', price: 'Rs. 6,000', duration: '120 mins' },
  { id: 'wfd7', category: 'Women', subcategory: 'Deal', title: 'Premium Deal', description: 'Full Body Massage, Hot Towel, Head Hot oiling, Signature Manicure pedicure, Whitening Facial, Hand & Feet Spa, Waxing', price: 'Rs. 15,000', duration: '180 mins' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Men', title: 'Classic Fade', imageUrl: 'https://images.unsplash.com/photo-1630827020718-3433092696e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFkZSUyMGhhaXJjdXR8ZW58MHx8MHx8fDA%3D' },
  { id: 'g2', category: 'Women', title: 'Bridal Elegance', imageUrl: 'https://i.pinimg.com/736x/6b/aa/e1/6baae11fd72c5a3f6c425123a5b84ba5.jpg' },
  { id: 'g4', category: 'Men', title: 'Textured Crop', imageUrl: 'https://images.unsplash.com/photo-1763742936992-cac96be031b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGV4dHVyZWQlMjBoYWlyY3V0fGVufDB8fDB8fHww' },
  { id: 'g5', category: 'Women', title: 'Vibrant Color', imageUrl: 'https://images.unsplash.com/photo-1712213396688-c6f2d536671f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Previously Added
  { id: 'g7', category: 'Men', title: 'Beard Grooming', imageUrl: 'https://images.unsplash.com/photo-1654097803253-d481b6751f29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmVhcmRzJTIwR3Jvb21pbmd8ZW58MHx8MHx8fDA%3D' },
  { id: 'g8', category: 'Women', title: 'Party Makeup', imageUrl: 'https://images.unsplash.com/photo-1615562715205-570ee6248353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBBcnR5JTIwbWFrZXVwfGVufDB8fDB8fHww' },
  { id: 'g10', category: 'Men', title: 'Royal Shave', imageUrl: 'https://images.unsplash.com/photo-1672642149550-d4f7255ccbcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNoYXZlJTIwYmFyYmVyfGVufDB8fDB8fHww' },
  { id: 'g11', category: 'Women', title: 'Hair Treatment', imageUrl: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Ahsan Ali', content: 'The attention to detail at Salon Studio is unmatched in Lahore. My go-to for every event.', rating: 5 },
  { id: 't2', name: 'Zara Malik', content: 'Absolutely in love with my hair color. The staff is professional and the ambiance is pure luxury.', rating: 5 },
  { id: 't3', name: 'Bilal Ahmad', content: 'Executive grooming at its finest. Highly recommended for men who value quality.', rating: 5 },
];
