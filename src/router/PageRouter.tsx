import type { RouteComponent, ScreenId } from '../types/pos';
import { ScreenSwitcher } from '../components/ScreenSwitcher';
import { Shell } from '../features/AdminBackend/components/Shell';
import { Dashboard } from '../features/AdminBackend/pages/Dashboard';
import { resolveAdminRoute } from '../features/AdminBackend/routes';
import { LoginScreen } from '../features/StoreFrontend/pages/LoginScreen';
import { OrderSummaryScreen } from '../features/StoreFrontend/pages/OrderSummaryScreen';
import { Storefront } from '../features/StoreFrontend/pages/Storefront';
import { SuccessScreen } from '../features/StoreFrontend/pages/SuccessScreen';

const standaloneRoutes: Partial<Record<ScreenId, RouteComponent>> = {
  login: LoginScreen,
  storefront: Storefront,
  summary: OrderSummaryScreen,
  success: SuccessScreen
};

interface PageRouterProps {
  screen: ScreenId;
}

export function PageRouter({ screen }: PageRouterProps) {
  const StandalonePage = standaloneRoutes[screen];
  if (StandalonePage) return <StandalonePage />;

  const AdminPage = resolveAdminRoute(screen) || Dashboard;
  return (
    <div className="app">
      <ScreenSwitcher />
      <Shell>
        <AdminPage />
      </Shell>
    </div>
  );
}
