import { Icon } from '../../../components/Icon';
import { ScreenSwitcher } from '../../../components/ScreenSwitcher';
import { starterOrder } from '../../../data/posData';
import { todayKey, usePosStore } from '../../../store/usePosStore';

export function SuccessScreen() {
  const paidOrder = usePosStore((state) => state.paidOrder);
  const startNewSale = usePosStore((state) => state.startNewSale);
  const receipt = paidOrder || {
    number: `SS-${todayKey()}-0001`,
    items: starterOrder,
    subtotal: 365,
    tax: 25.55,
    total: 390.55,
    paidAt: new Date()
  };
  const paidDate = receipt.paidAt instanceof Date ? receipt.paidAt : new Date(receipt.paidAt);

  return (
    <main className="success-screen">
      <ScreenSwitcher />
      <section className="receipt">
        <div className="success-icon"><Icon fill size={64}>check_circle</Icon></div>
        <h1>Payment Successful</h1>
        <p>Transaction completed perfectly.</p>
        <div className="receipt-meta"><strong>Siam Sweets POS</strong><span>Bangkok, Thailand</span><span>Date: {paidDate.toLocaleDateString('en-GB')}</span><span>Order: #{receipt.number}</span></div>
        {receipt.items.map((item) => (
          <div className="receipt-line" key={item.name}><div><b>{item.name}</b>{item.note && <small>{item.note}</small>}</div><span>x{item.qty}</span><strong>฿{(item.qty * item.price).toFixed(2)}</strong></div>
        ))}
        <div className="receipt-total"><p><span>Subtotal</span><strong>฿{receipt.subtotal.toFixed(2)}</strong></p><p><span>Tax (7%)</span><strong>฿{receipt.tax.toFixed(2)}</strong></p><p><span>Total</span><strong>฿{receipt.total.toFixed(2)}</strong></p></div>
        <div className="receipt-actions"><button className="secondary-btn"><Icon>print</Icon>Print Receipt</button><button className="secondary-btn"><Icon>mail</Icon>Send to Email</button><button className="primary-btn" onClick={startNewSale}><Icon>add_circle</Icon>New Sale</button></div>
      </section>
    </main>
  );
}
