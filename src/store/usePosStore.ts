import { create } from 'zustand';
import { screenTabs, starterOrder } from '../data/posData';
import type { OrderItem, PaidOrder, PosState, ScreenId, SetScreenOptions } from '../types/pos';

const validScreenIds = new Set<ScreenId>(screenTabs.map(([id]) => id));

export function readScreenFromPath(pathname = window.location.pathname): ScreenId | null {
  const path = decodeURIComponent(pathname).replace(/^\/+|\/+$/g, '');
  if (!path) return 'login';
  return validScreenIds.has(path as ScreenId) ? (path as ScreenId) : null;
}

function writeScreenPath(screen: ScreenId, options: SetScreenOptions = {}): void {
  if (typeof window === 'undefined' || options.syncUrl === false) return;

  const nextPath = screen === 'login' ? '/' : `/${screen}`;
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (currentPath === nextPath) return;

  const method = options.replace ? 'replaceState' : 'pushState';
  window.history[method]({ screen }, '', nextPath);
}

export function todayKey(): string {
  return new Date().toLocaleDateString('en-CA').replace(/-/g, '');
}

export function nextDailyOrderNumber(): string {
  const date = todayKey();
  const storageKey = 'siam-sweets-order-sequence';
  let sequence = 1;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}') as {
      date?: string;
      sequence?: number;
    };
    sequence = saved.date === date ? Number(saved.sequence || 0) + 1 : 1;
    localStorage.setItem(storageKey, JSON.stringify({ date, sequence }));
  } catch {
    sequence = 1;
  }

  return `SS-${date}-${String(sequence).padStart(4, '0')}`;
}

export const calculateSubtotal = (order: OrderItem[]): number => (
  order.reduce((sum, item) => sum + item.qty * item.price, 0)
);
export const calculateTax = (subtotal: number): number => subtotal * 0.07;

export const usePosStore = create<PosState>((set, get) => ({
  screen: typeof window === 'undefined' ? 'login' : readScreenFromPath() ?? 'login',
  order: starterOrder,
  orderNumber: nextDailyOrderNumber(),
  paidOrder: null,
  setScreen: (screen, options) => {
    set({ screen });
    writeScreenPath(screen, options);
  },
  addProduct: (product) => set((state) => {
    const found = state.order.find((item) => item.name === product.name);
    if (found) {
      return {
        order: state.order.map((item) => (
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        ))
      };
    }

    return {
      order: [
        ...state.order,
        { name: product.name, note: product.subtitle, qty: 1, price: Number(product.price.replace(/[^\d.]/g, '')) }
      ]
    };
  }),
  updateQty: (name, delta) => set((state) => ({
    order: state.order.map((item) => (
      item.name === name ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ))
  })),
  removeItem: (name) => set((state) => ({
    order: state.order.filter((item) => item.name !== name)
  })),
  showOrderSummary: () => {
    if (get().order.length === 0) return;
    get().setScreen('summary');
  },
  checkout: () => {
    const { order, orderNumber } = get();
    if (order.length === 0) return;
    const subtotal = calculateSubtotal(order);
    const tax = calculateTax(subtotal);

    set({
      paidOrder: {
        number: orderNumber,
        items: order,
        subtotal,
        tax,
        total: subtotal + tax,
        paidAt: new Date()
      } satisfies PaidOrder,
    });
    get().setScreen('success');
  },
  startNewSale: () => {
    set({
      order: [],
      orderNumber: nextDailyOrderNumber(),
      paidOrder: null
    });
    get().setScreen('storefront');
  }
}));
