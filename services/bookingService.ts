import { Booking } from '../types';

export const createBooking = (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<Booking> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const newBooking: Booking = {
        ...booking,
        id: Math.random().toString(36).substr(2, 9),
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };
      
      console.log("Booking created:", newBooking);
      resolve(newBooking);
    }, 800);
  });
};