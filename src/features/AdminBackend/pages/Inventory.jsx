import { Icon } from '../../../components/Icon';
import { img } from '../../../data/posData';
import { Badge, DataTable, PageTitle, Panel, ProductMini } from '../components/AdminUi';

export function Inventory() {
  return (
    <section>
      <PageTitle title="Catalog Management" subtitle="Manage your boutique offerings, adjust pricing, and monitor stock levels." actions={<><button className="secondary-btn"><Icon>download</Icon>Export</button><button className="primary-btn"><Icon>add</Icon>New Product</button></>} />
      <div className="pill-row spaced">{['All Items', 'Classic Desserts', 'Seasonal', 'Beverages'].map((x, i) => <button className={i === 0 ? 'selected' : ''} key={x}>{x}</button>)}</div>
      <Panel>
        <DataTable columns={['Product Details', 'Category', 'Price', 'Stock Level', 'Status', 'Actions']} rows={[
          [<ProductMini img={img.mango} title="Mango Sticky Rice" sub="Khao Niao Mamuang" />, 'Classic', '฿120.00', '45 units', <Badge>Published</Badge>, <Icon>edit</Icon>],
          [<ProductMini img={img.lukChup} title="Luk Chup (Mini Fruits)" sub="Mung Bean Paste Marzipan" />, 'Artisanal', '฿85.00', <span className="warn">4 units</span>, <Badge>Published</Badge>, <Icon>edit</Icon>],
          [<ProductMini title="Thong Yip (Pinched Gold)" sub="Seasonal Egg Yolk Dessert" />, 'Seasonal', '฿95.00', '0 units', <Badge tone="neutral">Hidden</Badge>, <Icon>visibility</Icon>],
          [<ProductMini img={img.tea} title="Classic Thai Tea" sub="Cha Yen (Iced)" />, 'Beverages', '฿65.00', '∞ Made to order', <Badge>Published</Badge>, <Icon>edit</Icon>]
        ]} />
      </Panel>
    </section>
  );
}
