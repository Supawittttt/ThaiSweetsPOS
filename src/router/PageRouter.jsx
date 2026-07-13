import { ScreenSwitcher } from '../components/ScreenSwitcher';
import { Shell } from '../features/AdminBackend/components/Shell';
import { Dashboard } from '../features/AdminBackend/pages/Dashboard';
import { Inventory } from '../features/AdminBackend/pages/Inventory';
import { Members } from '../features/AdminBackend/pages/Members';
import { RegisterMember } from '../features/AdminBackend/pages/RegisterMember';
import { Reports } from '../features/AdminBackend/pages/Reports';
import { Roles } from '../features/AdminBackend/pages/Roles';
import { Settings } from '../features/AdminBackend/pages/Settings';
import { Screen01Reports } from '../features/AdminBackend/reference/Screen01Reports';
import { Screen02RoleManagement } from '../features/AdminBackend/reference/Screen02RoleManagement';
import { Screen03RegisterMember } from '../features/AdminBackend/reference/Screen03RegisterMember';
import { Screen04Members } from '../features/AdminBackend/reference/Screen04Members';
import { Screen05Settings } from '../features/AdminBackend/reference/Screen05Settings';
import { Screen06Inventory } from '../features/AdminBackend/reference/Screen06Inventory';
import { Screen10Dashboard } from '../features/AdminBackend/reference/Screen10Dashboard';
import { LoginScreen } from '../features/StoreFrontend/pages/LoginScreen';
import { OrderSummaryScreen } from '../features/StoreFrontend/pages/OrderSummaryScreen';
import { Storefront } from '../features/StoreFrontend/pages/Storefront';
import { SuccessScreen } from '../features/StoreFrontend/pages/SuccessScreen';
import { Screen07PaymentSuccess } from '../features/StoreFrontend/reference/Screen07PaymentSuccess';
import { Screen08ThaiStorefront } from '../features/StoreFrontend/reference/Screen08ThaiStorefront';
import { Screen09Empty } from '../features/StoreFrontend/reference/Screen09Empty';
import { Screen11SiamStorefront } from '../features/StoreFrontend/reference/Screen11SiamStorefront';
import { Screen12Empty } from '../features/StoreFrontend/reference/Screen12Empty';
import { Screen13Login } from '../features/StoreFrontend/reference/Screen13Login';

const adminRoutes = {
  dashboard: Dashboard,
  inventory: Inventory,
  members: Members,
  register: RegisterMember,
  reports: Reports,
  roles: Roles,
  settings: Settings,
  'screen-01': Screen01Reports,
  'screen-02': Screen02RoleManagement,
  'screen-03': Screen03RegisterMember,
  'screen-04': Screen04Members,
  'screen-05': Screen05Settings,
  'screen-06': Screen06Inventory,
  'screen-10': Screen10Dashboard
};

const standaloneRoutes = {
  login: LoginScreen,
  storefront: Storefront,
  summary: OrderSummaryScreen,
  success: SuccessScreen,
  'screen-07': Screen07PaymentSuccess,
  'screen-08': Screen08ThaiStorefront,
  'screen-09': Screen09Empty,
  'screen-11': Screen11SiamStorefront,
  'screen-12': Screen12Empty,
  'screen-13': Screen13Login
};

export function PageRouter({ screen }) {
  const StandalonePage = standaloneRoutes[screen];
  if (StandalonePage) return <StandalonePage />;

  const AdminPage = adminRoutes[screen] || Dashboard;
  return (
    <div className="app">
      <ScreenSwitcher />
      <Shell>
        <AdminPage />
      </Shell>
    </div>
  );
}
