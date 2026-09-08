export type VendorRole = 'ADMIN' | 'CUSTOMER' | 'DRIVER' | 'VENDOR';

export interface VendorAuthRequest {
  email: string;
  password: string;
}

export interface VendorAuthResponse {
  token: string;
  role: VendorRole;
  vendorId?: string;
  email?: string;
  name?: string;
}

export interface VendorProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl?: string;
  isAvailable: boolean;
}

export interface VendorOrder {
  id: string;
  customerName: string;
  itemName: string;
  total: number;
  status: 'NEW' | 'PREPARING' | 'READY' | 'DELIVERED';
  createdAt: string;
}

export interface VendorDashboardStats {
  salesToday: number;
  ordersToday: number;
  activeItems: number;
  rating: number;
}
