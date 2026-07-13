import { Icon } from '../../../components/Icon';
import { DataTable, Metric, PageTitle, Panel } from '../components/AdminUi';

export function Reports() {
  return (
    <section>
      <PageTitle title="Sales Overview" subtitle="Track your boutique's performance and revenue trends." actions={<><button className="secondary-btn"><Icon>calendar_today</Icon>This Week</button><button className="primary-btn"><Icon>download</Icon>Export</button></>} />
      <div className="metric-grid"><Metric icon="payments" label="Total Sales" value="฿ 124,500" trend="+12.5% vs last week" /><Metric icon="shopping_bag" label="Total Orders" value="842" trend="+5.2% vs last week" tone="gold" /><Metric icon="receipt_long" label="Avg. Order Value" value="฿ 148" trend="-1.1% vs last week" tone="red" /></div>
      <Panel title="Revenue Trends"><div className="chart">{[48, 56, 42, 62, 82, 74, 92].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></Panel>
      <Panel title="Top Performing Products" action="View All"><DataTable columns={['Product Name', 'Category', 'Units Sold', 'Revenue', 'Trend']} rows={[['Mango Sticky Rice', 'Signature Desserts', '342', '฿ 41,040', <Icon>trending_up</Icon>], ['Thong Yip (Pinched Gold)', 'Auspicious Sweets', '156', '฿ 14,040', <Icon>trending_up</Icon>], ['Coconut Milk Ice Cream', 'Cold Desserts', '128', '฿ 7,680', <Icon>trending_flat</Icon>]]} /></Panel>
    </section>
  );
}
