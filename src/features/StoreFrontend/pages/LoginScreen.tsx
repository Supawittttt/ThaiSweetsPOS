import { Icon } from '../../../components/Icon';
import { ScreenSwitcher } from '../../../components/ScreenSwitcher';
import { usePosStore } from '../../../store/usePosStore';

export function LoginScreen() {
  const setScreen = usePosStore((state) => state.setScreen);

  return (
    <main className="login-screen">
      <ScreenSwitcher />
      <div className="ambient a1" />
      <div className="ambient a2" />
      <section className="login-cardset">
        <div className="login-header">
          <div className="login-logo"><Icon fill size={36}>spa</Icon></div>
          <h1>Siam Sweets POS</h1>
          <p>Select your workspace to continue</p>
        </div>
        <div className="workspace-choice">
          <button onClick={() => setScreen('storefront')}>
            <span><Icon size={54}>storefront</Icon></span>
            <strong>Storefront</strong>
            <em>หน้าร้าน</em>
          </button>
          <button onClick={() => setScreen('dashboard')}>
            <span><Icon size={54}>admin_panel_settings</Icon></span>
            <strong>Admin Backend</strong>
            <em>หลังบ้าน</em>
          </button>
        </div>
        <footer>Siam Sweets POS System v2.4.1 © 2024</footer>
      </section>
    </main>
  );
}
