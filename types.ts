export interface Service {
  id: string;
  category: 'Men' | 'Women' | 'Massage';
  subcategory: string;
  title: string;
  description: string;
  price: string; // Display string like "Rs. 2,500" or "Rs. 2,000 - 3,500"
  duration: string;
}

export interface GalleryItem {
  id: string;
  category: 'Men' | 'Women' | 'Interior';
  title: string;
  imageUrl: string;
}

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceCategory: 'Men' | 'Women' | 'Massage';
  serviceNames: string[];
  date: string;
  time: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
}