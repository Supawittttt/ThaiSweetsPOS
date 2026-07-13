import { Icon } from '../../../components/Icon';
import { Badge, DataTable, PageTitle, Panel, Toggle } from '../components/AdminUi';

export function Roles() {
  return (
    <section>
      <PageTitle title="Staff Directory" subtitle="Manage team members and their assigned roles." actions={<button className="primary-btn"><Icon>person_add</Icon>Add Staff</button>} />
      <div className="split">
        <Panel><DataTable columns={['User', 'Role', 'Status', 'Actions']} rows={[['Mali K.', 'Owner', <Badge>Active</Badge>, <Icon>edit</Icon>], ['Somchai P.', 'Manager', <Badge>Active</Badge>, <Icon>edit</Icon>], ['Kittisak N.', 'Staff', <Badge>Active</Badge>, <Icon>edit</Icon>], ['Ariya T.', 'Staff', <Badge tone="neutral">Inactive</Badge>, <Icon>edit</Icon>]]} /></Panel>
        <Panel title="Role Permissions"><div className="role-card"><h3>Select Role to Edit</h3><div className="pill-row"><button className="selected">Owner</button><button>Manager</button><button>Staff</button></div>{['Process Transactions', 'Apply Discounts', 'Process Refunds', 'Manage Inventory', 'View Sales Reports', 'System Settings'].map((x, i) => <Toggle key={x} title={x} text={i < 3 ? 'Point of Sale access' : 'Back Office access'} on={i < 5} />)}<button className="primary-btn full">Save Changes</button></div></Panel>
      </div>
    </section>
  );
}
