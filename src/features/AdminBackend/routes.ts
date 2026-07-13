import type { AdminScreenId, RouteComponent, ScreenId } from '../../types/pos';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Members } from './pages/Members';
import { RegisterMember } from './pages/RegisterMember';
import { Reports } from './pages/Reports';
import { Roles } from './pages/Roles';
import { Settings } from './pages/Settings';

export const adminRoutes: Record<AdminScreenId, RouteComponent> = {
  dashboard: Dashboard,
  inventory: Inventory,
  members: Members,
  register: RegisterMember,
  reports: Reports,
  roles: Roles,
  settings: Settings
};

export function resolveAdminScreenId(screen: ScreenId): AdminScreenId | null {
  if (screen in adminRoutes) return screen as AdminScreenId;
  return null;
}

export function resolveAdminRoute(screen: ScreenId): RouteComponent | null {
  const adminScreen = resolveAdminScreenId(screen);
  return adminScreen ? adminRoutes[adminScreen] : null;
}
