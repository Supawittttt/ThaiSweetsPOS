import { Icon } from '../../../components/Icon';
import { usePosStore } from '../../../store/usePosStore';
import { Badge, DataTable, MemberMini, Metric, PageTitle, Panel } from '../components/AdminUi';

export function Members() {
  const setScreen = usePosStore((state) => state.setScreen);

  return (
    <section>
      <PageTitle title="Members Directory" subtitle="Manage loyal customers and track sweet rewards." actions={<button className="primary-btn" onClick={() => setScreen('register')}><Icon>person_add</Icon>Register New Member</button>} />
      <div className="members-summary"><Metric icon="group" label="Total Members" value="1,248" trend="+12 this week" /></div>
      <div className="pill-row spaced">{['All Members', 'Gold Tier', 'Silver Tier', 'Bronze Tier'].map((x, i) => <button className={i === 0 ? 'selected' : ''} key={x}>{x}</button>)}<button><Icon>filter_list</Icon>Filters</button></div>
      <Panel>
        <DataTable columns={['Member', 'Contact', 'Tier & Points', 'Last Visit', 'Actions']} rows={[
          [<MemberMini name="Krit Pongsakon" id="#MB-8842" />, '081-234-5678', <><Badge tone="gold">Gold</Badge><small>2,450 pts</small></>, 'Today, 10:42 AM', <Icon>more_vert</Icon>],
          [<MemberMini name="Siriporn T." id="#MB-9102" />, '089-876-5432', <><Badge tone="silver">Silver</Badge><small>840 pts</small></>, 'Oct 24, 2023', <Icon>more_vert</Icon>],
          [<MemberMini name="Nidnoi W." id="#MB-9551" />, '085-111-2233', <><Badge tone="bronze">Bronze</Badge><small>120 pts</small></>, 'Oct 18, 2023', <Icon>more_vert</Icon>]
        ]} />
      </Panel>
    </section>
  );
}
