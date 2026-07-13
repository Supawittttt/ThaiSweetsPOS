import type { ComponentType, ReactNode } from 'react';

export type ScreenId =
  | 'login'
  | 'storefront'
  | 'summary'
  | 'dashboard'
  | 'inventory'
  | 'members'
  | 'register'
  | 'reports'
  | 'roles'
  | 'settings'
  | 'success';

export type AdminScreenId =
  | 'dashboard'
  | 'inventory'
  | 'members'
  | 'register'
  | 'reports'
  | 'roles'
  | 'settings';

export type IconName = string;
export type ImageUrl = string;

export interface Product {
  name: string;
  subtitle: string;
  price: string;
  img: ImageUrl;
}

export interface OrderItem {
  name: string;
  note?: string;
  qty: number;
  price: number;
}

export interface PaidOrder {
  number: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  paidAt: Date | string;
}

export type NavItem = readonly [icon: IconName, label: string, screen: ScreenId];
export type ScreenTab = readonly [id: ScreenId, label: string];
export type RouteComponent = ComponentType;
export type TableCell = ReactNode;
export type TableRow = TableCell[];
export type Tone = 'green' | 'gold' | 'blue' | 'red' | 'silver' | 'bronze' | 'neutral';

export interface SetScreenOptions {
  replace?: boolean;
  syncUrl?: boolean;
}

export interface PosState {
  screen: ScreenId;
  order: OrderItem[];
  orderNumber: string;
  paidOrder: PaidOrder | null;
  setScreen: (screen: ScreenId, options?: SetScreenOptions) => void;
  addProduct: (product: Product) => void;
  updateQty: (name: string, delta: number) => void;
  removeItem: (name: string) => void;
  showOrderSummary: () => void;
  checkout: () => void;
  startNewSale: () => void;
}
