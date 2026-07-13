import { Icon } from '../../../components/Icon';
import { ScreenSwitcher } from '../../../components/ScreenSwitcher';
import { calculateSubtotal, calculateTax, usePosStore } from '../../../store/usePosStore';
import { ConfirmPaymentButton } from '../components/ConfirmPaymentButton';
import { SummaryCard } from '../components/SummaryCard';

export function OrderSummaryScreen() {
  const order = usePosStore((state) => state.order);
  const orderNumber = usePosStore((state) => state.orderNumber);
  const setScreen = usePosStore((state) => state.setScreen);
  const checkout = usePosStore((state) => state.checkout);
  const subtotal = calculateSubtotal(order);
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  return (
    <main className="summary-screen">
      <ScreenSwitcher />
      <section className="summary-shell">
        <header className="summary-header">
          <button className="back-btn" onClick={() => setScreen('storefront')}><Icon>arrow_back</Icon>Edit Order</button>
          <div>
            <h1>Order Summary</h1>
            <p>Review order #{orderNumber} before confirming payment.</p>
          </div>
        </header>
        <div className="summary-grid">
          <SummaryCard>
            <div className="summary-card-title">
              <h2>Items</h2>
              <span>{order.length} products</span>
            </div>
            <div className="summary-items">
              {order.map((item) => (
                <article className="summary-item" key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    {item.note && <p>{item.note}</p>}
                  </div>
                  <span>x{item.qty}</span>
                  <strong>฿{(item.qty * item.price).toFixed(2)}</strong>
                </article>
              ))}
            </div>
          </SummaryCard>
          <SummaryCard as="aside" className="payment-card">
            <div className="summary-card-title">
              <h2>Payment</h2>
              <span>Ready</span>
            </div>
            <button className="payment-choice selected"><Icon>qr_code_scanner</Icon><span><b>PromptPay QR</b><small>Thai bank transfer</small></span></button>
            <button className="payment-choice"><Icon>payments</Icon><span><b>Cash</b><small>Cash drawer enabled</small></span></button>
            <button className="payment-choice"><Icon>credit_card</Icon><span><b>Card</b><small>Visa, Mastercard</small></span></button>
            <div className="summary-totals">
              <p><span>Subtotal</span><strong>฿{subtotal.toFixed(2)}</strong></p>
              <p><span>Tax (7%)</span><strong>฿{tax.toFixed(2)}</strong></p>
              <p className="grand"><span>Total</span><strong>฿{total.toFixed(2)}</strong></p>
            </div>
            <ConfirmPaymentButton onConfirm={checkout} />
          </SummaryCard>
        </div>
      </section>
    </main>
  );
}
