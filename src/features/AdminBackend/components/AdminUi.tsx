import type { ReactNode } from 'react';
import { Icon } from '../../../components/Icon';
import type { TableRow, Tone } from '../../../types/pos';
import {
  BadgeRoot,
  MetricRoot,
  MiniRoot,
  PageActions,
  PageTitleRoot,
  PanelRoot,
  TableWrap,
  ToggleRoot
} from './AdminUi.styles';

interface PageTitleProps {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}

interface MetricProps {
  icon: string;
  label: string;
  value: string;
  trend: string;
  tone?: Tone;
}

interface PanelProps {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
}

interface DataTableProps {
  columns: string[];
  rows: TableRow[];
}

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
}

interface ProductMiniProps {
  img?: string;
  title: string;
  sub: string;
}

interface MemberMiniProps {
  name: string;
  id: string;
}

interface ToggleProps {
  title: string;
  text: string;
  on?: boolean;
}

export function PageTitle({ title, subtitle, actions }: PageTitleProps) {
  return (
    <PageTitleRoot>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {actions && <PageActions>{actions}</PageActions>}
    </PageTitleRoot>
  );
}

export function Metric({ icon, label, value, trend, tone = 'green' }: MetricProps) {
  return (
    <MetricRoot $tone={tone}>
      <div><Icon fill>{icon}</Icon></div>
      <span>{trend}</span>
      <p>{label}</p>
      <h3>{value}</h3>
    </MetricRoot>
  );
}

export function Panel({ title, action, children }: PanelProps) {
  return (
    <PanelRoot>
      {title && (
        <header>
          <h3>{title}</h3>
          {action && <button>{action}<Icon size={18}>arrow_forward</Icon></button>}
        </header>
      )}
      {children}
    </PanelRoot>
  );
}

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <TableWrap>
      <table>
        <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </TableWrap>
  );
}

export function Badge({ children, tone = 'green' }: BadgeProps) {
  return <BadgeRoot $tone={tone}>{children}</BadgeRoot>;
}

export function ProductMini({ img: src, title, sub }: ProductMiniProps) {
  return <MiniRoot>{src ? <img src={src} alt="" /> : <span><Icon>cookie</Icon></span>}<div><b>{title}</b><small>{sub}</small></div></MiniRoot>;
}

export function MemberMini({ name, id }: MemberMiniProps) {
  return <MiniRoot $round><span>{name.slice(0, 1)}</span><div><b>{name}</b><small>ID: {id}</small></div></MiniRoot>;
}

export function Toggle({ title, text, on = false }: ToggleProps) {
  return <ToggleRoot><div><b>{title}</b><p>{text}</p></div><input type="checkbox" defaultChecked={on} /><span /></ToggleRoot>;
}
