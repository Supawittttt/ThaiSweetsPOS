import { Brand } from '../../../components/Brand';
import { Icon } from '../../../components/Icon';
import { img, products } from '../../../data/posData';
import { calculateSubtotal, calculateTax, usePosStore } from '../../../store/usePosStore';
import type { Product } from '../../../types/pos';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addProduct = usePosStore((state) => state.addProduct);

  return (
    <article className="product-card">
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.subtitle}</p>
        <footer><strong>{product.price}</strong><button onClick={() => addProduct(product)}><Icon>add</Icon></button></footer>
      </div>
    </article>
  );
}

function OrderPanel() {
  const order = usePosStore((state) => state.order);
  const orderNumber = usePosStore((state) => state.orderNumber);
  const updateQty = usePosStore((state) => state.updateQty);
  const removeItem = usePosStore((state) => state.removeItem);
  const showOrderSummary = usePosStore((state) => state.showOrderSummary);
  const subtotal = calculateSubtotal(order);
  const tax = calculateTax(subtotal);

  return (
    <aside className="order-panel">
      <div className="order-title"><div><h2>Current Order</h2><p>Order #{orderNumber}</p></div><button><Icon>more_vert</Icon></button></div>
      <div className="order-list">
        {order.length === 0 ? (
          <div className="empty-order">
            <Icon size={34}>shopping_bag</Icon>
            <h3>No products in this order</h3>
            <p>Add sweets from the menu to start sale #{orderNumber}.</p>
          </div>
        ) : (
          order.map((item) => (
            <div className="order-line" key={item.name}>
              <div className="order-line-main">
                <h4>{item.name}</h4>
                <p>{item.note}</p>
                <div className="qty"><button onClick={() => updateQty(item.name, -1)}><Icon size={16}>remove</Icon></button><span>{item.qty}</span><button onClick={() => updateQty(item.name, 1)}><Icon size={16}>add</Icon></button></div>
              </div>
              <div className="order-line-side">
                <strong>฿ {(item.qty * item.price).toFixed(2)}</strong>
                <button className="delete-item" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.name)}><Icon size={18}>delete</Icon></button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="order-total">
        <p><span>Subtotal</span><strong>฿ {subtotal.toFixed(2)}</strong></p>
        <p><span>Tax (7%)</span><strong>฿ {tax.toFixed(2)}</strong></p>
        <p className="total"><span>Total</span><strong>฿ {(subtotal + tax).toFixed(2)}</strong></p>
        <button disabled={order.length === 0} onClick={showOrderSummary}>Review Order <Icon>arrow_forward</Icon></button>
      </div>
    </aside>
  );
}

export function Storefront() {
  return (
    <div className="storefront-screen">
      <aside className="mini-sidebar">
        <Brand compact />
        <button className="mini-active"><Icon fill>point_of_sale</Icon><span>Register Sale</span></button>
        <button><Icon>receipt_long</Icon><span>Orders</span></button>
        <button><Icon>inventory_2</Icon><span>Inventory</span></button>
        <button><Icon>group</Icon><span>Members</span></button>
      </aside>
      <main className="store-main">
        <div className="store-top">
          <div className="search wide"><Icon>search</Icon><input placeholder="Search sweets or drinks" /></div>
          <div className="top-actions"><button><Icon>notifications</Icon></button><button><Icon>settings</Icon></button><button className="staff"><img src={img.staff} alt="" />Staff Profile</button></div>
        </div>
        <section className="catalog-head">
          <h2>Menu Categories</h2>
          <div className="pill-row">{['All Items', 'Traditional', 'Modern', 'Signature Drinks', 'Gift Sets'].map((x, i) => <button className={i === 0 ? 'selected' : ''} key={x}>{x}</button>)}</div>
        </section>
        <section className="product-grid">
          {products.map((product) => <ProductCard key={product.name} product={product} />)}
        </section>
      </main>
      <OrderPanel />
    </div>
  );
}
