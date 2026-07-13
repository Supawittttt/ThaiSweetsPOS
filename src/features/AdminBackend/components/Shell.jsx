import { useState } from 'react';
import { Brand } from '../../../components/Brand';
import { Icon } from '../../../components/Icon';
import { navItems } from '../../../data/posData';
import { usePosStore } from '../../../store/usePosStore';
import { Topbar } from './Topbar';

export function Shell({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const active = usePosStore((state) => state.screen);
  const setScreen = usePosStore((state) => state.setScreen);

  return (
    <div className={`shell ${collapsed ? 'collapsed' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-head">
          <Brand />
          <button
            className="sidebar-toggle"
            aria-label={collapsed ? 'Expand admin sidebar' : 'Collapse admin sidebar'}
            aria-pressed={collapsed}
            onClick={() => setCollapsed((value) => !value)}
          >
            <Icon size={20}>{collapsed ? 'keyboard_double_arrow_right' : 'keyboard_double_arrow_left'}</Icon>
          </button>
        </div>
        <nav>
          {navItems.map(([icon, label]) => {
            const target = label.toLowerCase();
            const id = target === 'dashboard' ? 'dashboard' : target === 'inventory' ? 'inventory' : target === 'members' ? 'members' : target === 'reports' ? 'reports' : 'settings';
            return (
              <button key={label} className={active === id ? 'nav-item active' : 'nav-item'} onClick={() => setScreen(id)}>
                <Icon fill={active === id}>{icon}</Icon>
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
      <div className="workspace">
        <Topbar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
