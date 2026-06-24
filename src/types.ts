export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type OrderStatus = 'received' | 'preparing' | 'ready' | 'delivering' | 'delivered';

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  items: CartItem[];
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  type: 'delivery' | 'pickup';
  total: number;
  discount: number;
  subtotal: number;
  couponCode?: string;
  estimatedTime: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
