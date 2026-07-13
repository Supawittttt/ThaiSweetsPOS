import { Icon } from '../../../components/Icon';
import { usePosStore } from '../../../store/usePosStore';
import { PageTitle, Toggle } from '../components/AdminUi';

export function RegisterMember() {
  const setScreen = usePosStore((state) => state.setScreen);

  return (
    <section>
      <button className="back-btn" onClick={() => setScreen('members')}><Icon>arrow_back</Icon>Back</button>
      <PageTitle title="Register Member" subtitle="Add a new customer to the loyalty database." />
      <div className="form-card">
        <fieldset><legend><Icon>person</Icon>Personal Details</legend><label>Full Name<input /></label><label>Date of Birth<input type="date" /></label></fieldset>
        <fieldset><legend><Icon>contact_phone</Icon>Contact Information</legend><label>Phone Number<input placeholder="+66" /></label><label>Email Address<input type="email" /></label></fieldset>
        <fieldset><legend><Icon>loyalty</Icon>Loyalty Preferences</legend><Toggle title="Enroll in Mango Rewards" text="Member will start earning points on their next purchase." on /><Toggle title="Send SMS Receipts" text="Automatically send digital receipts to the provided phone number." /></fieldset>
        <div className="form-actions"><button className="secondary-btn">Cancel</button><button className="primary-btn">Register Member</button></div>
      </div>
    </section>
  );
}
