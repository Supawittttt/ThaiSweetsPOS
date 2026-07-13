import { Icon } from '../../../components/Icon';
import { PageTitle, Panel, Toggle } from '../components/AdminUi';

export function Settings() {
  return (
    <section>
      <PageTitle title="Settings Configuration" subtitle="Store profile, payments, printers, and team access." />
      <div className="settings-grid">
        <Panel title="Store Profile"><div className="field-list"><label>Store Name<input defaultValue="ThaiSweets POS" /></label><label>Business Address<textarea defaultValue="123 Sukhumvit Road, Khlong Toei, Bangkok 10110" /></label><label>Tax Identification Number<input defaultValue="0105559119981" /></label><button className="primary-btn">Save Changes</button></div></Panel>
        <Panel title="Printer Settings"><Toggle title="Auto-Print Receipts" text="Automatically print a receipt after successful payment." on /><Toggle title="Kitchen Ticket Printer" text="Send preparation orders directly to the back station." on /></Panel>
        <Panel title="Payment Methods">{['PromptPay QR', 'Bank Transfer', 'Cash Drawer'].map((x, i) => <div className="method" key={x}><Icon>{i === 0 ? 'qr_code_scanner' : i === 1 ? 'account_balance' : 'payments'}</Icon><div><b>{x}</b><p>Active • {i === 0 ? 'Thai Banks' : i === 1 ? 'Manual Verify' : 'Standard'}</p></div><Icon>edit</Icon></div>)}<button className="secondary-btn"><Icon>add</Icon>Add Method</button></Panel>
        <Panel title="Staff Accounts">{['Mali C. - Manager', 'Arun P. - Cashier', 'Somchai (New) - Trainee'].map((x) => <div className="method" key={x}><Icon>account_circle</Icon><div><b>{x.split(' - ')[0]}</b><p>{x.split(' - ')[1]}</p></div><Icon>more_vert</Icon></div>)}</Panel>
      </div>
    </section>
  );
}
