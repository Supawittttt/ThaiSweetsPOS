import { useState } from 'react';
import { screenTabs } from '../data/posData';
import { usePosStore } from '../store/usePosStore';
import { Icon } from './Icon';

export function ScreenSwitcher() {
  const [open, setOpen] = useState<boolean>(false);
  const screen = usePosStore((state) => state.screen);
  const setScreen = usePosStore((state) => state.setScreen);

  return (
    <div className={`screen-switcher ${open ? 'open' : ''}`} aria-label="Screen switcher">
      <button className="screen-toggle" onClick={() => setOpen((value) => !value)}>
        <Icon size={18}>apps</Icon>
        {screenTabs.find(([id]) => id === screen)?.[1] || 'Screens'}
      </button>
      <div className="screen-menu">
        {screenTabs.map(([id, label]) => (
          <button key={id} className={screen === id ? 'active' : ''} onClick={() => { setScreen(id); setOpen(false); }}>{label}</button>
        ))}
      </div>
    </div>
  );
}
