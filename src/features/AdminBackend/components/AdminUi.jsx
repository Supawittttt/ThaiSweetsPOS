import { Icon } from '../../../components/Icon';

export function PageTitle({ title, subtitle, actions }) {
  return <div className="page-title"><div><h2>{title}</h2><p>{subtitle}</p></div>{actions && <div className="page-actions">{actions}</div>}</div>;
}

export function Metric({ icon, label, value, trend, tone = 'green' }) {
  return <article className={`metric ${tone}`}><div><Icon fill>{icon}</Icon></div><span>{trend}</span><p>{label}</p><h3>{value}</h3></article>;
}

export function Panel({ title, action, children }) {
  return <section className="panel">{title && <header><h3>{title}</h3>{action && <button>{action}<Icon size={18}>arrow_forward</Icon></button>}</header>}{children}</section>;
}

export function DataTable({ columns, rows }) {
  return <div className="table-wrap"><table><thead><tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function Badge({ children, tone = 'green' }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

export function ProductMini({ img: src, title, sub }) {
  return <div className="product-mini">{src ? <img src={src} alt="" /> : <span><Icon>cookie</Icon></span>}<div><b>{title}</b><small>{sub}</small></div></div>;
}

export function MemberMini({ name, id }) {
  return <div className="member-mini"><span>{name.slice(0, 1)}</span><div><b>{name}</b><small>ID: {id}</small></div></div>;
}

export function Toggle({ title, text, on = false }) {
  return <label className="toggle"><div><b>{title}</b><p>{text}</p></div><input type="checkbox" defaultChecked={on} /><span /></label>;
}
