import { create } from 'zustand';
import { starterOrder } from '../data/posData';

export function todayKey() {
  return new Date().toLocaleDateString('en-CA').replaceAll('-', '');
}

export function nextDailyOrderNumber() {
  const date = todayKey();
  const storageKey = 'siam-sweets-order-sequence';
  let sequence = 1;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    sequence = saved.date === date ? Number(saved.sequence || 0) + 1 : 1;
    localStorage.setItem(storageKey, JSON.stringify({ date, sequence }));
  } catch {
    sequence = 1;
  }

  return `SS-${date}-${String(sequence).padStart(4, '0')}`;
}

export const calculateSubtotal = (order) => order.reduce((sum, item) => sum + item.qty * item.price, 0);
export const calculateTax = (subtotal) => subtotal * 0.07;

export const usePosStore = create((set, get) => ({
  screen: 'login',
  order: starterOrder,
  orderNumber: nextDailyOrderNumber(),
  paidOrder: null,
  setScreen: (screen) => set({ screen }),
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
    set({ screen: 'summary' });
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
      },
      screen: 'success'
    });
  },
  startNewSale: () => set({
    order: [],
    orderNumber: nextDailyOrderNumber(),
    paidOrder: null,
    screen: 'storefront'
  })
}));
