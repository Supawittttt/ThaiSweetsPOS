import { Badge, DataTable, Metric, PageTitle, Panel } from '../components/AdminUi';

export function Dashboard() {
  return (
    <section>
      <PageTitle title="Daily Sales Overview" subtitle="Real-time performance metrics for today." />
      <div className="metric-grid">
        <Metric icon="payments" label="Today's Revenue" value="฿ 12,450" trend="+12%" />
        <Metric icon="receipt_long" label="Total Orders" value="84" trend="+5%" tone="gold" />
        <Metric icon="shopping_bag" label="Average Order Value" value="฿ 148" trend="0%" tone="blue" />
      </div>
      <Panel title="Live Orders" action="View All">
        <DataTable columns={['Order ID', 'Items', 'Amount', 'Status']} rows={[
          ['#TS-1042', 'Mango Sticky Rice (x2), Thai Tea', '฿ 320', <Badge tone="gold">Preparing</Badge>],
          ['#TS-1041', 'Khanom Chan, Bua Loy', '฿ 180', <Badge>Ready</Badge>],
          ['#TS-1040', 'Coconut Ice Cream, Thong Yip', '฿ 250', <Badge tone="neutral">Completed</Badge>]
        ]} />
      </Panel>
    </section>
  );
}
