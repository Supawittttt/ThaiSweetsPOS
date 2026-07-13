import { Icon } from '../../../components/Icon';
import { img } from '../../../data/posData';

interface TopbarProps {
  title?: string;
}

export function Topbar({ title = 'Staff Profile' }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="search"><Icon>search</Icon><input placeholder="Search" /></div>
      <div className="top-actions">
        <button><Icon>notifications</Icon></button>
        <button><Icon>help_outline</Icon></button>
        <button className="shift">Shift End</button>
        <button className="staff"><img src={img.staff} alt="" />{title}</button>
      </div>
    </header>
  );
}
