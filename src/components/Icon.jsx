export function Icon({ children, fill = false, size }) {
  return (
    <span className={`material-symbols-outlined ${fill ? 'fill' : ''}`} style={size ? { fontSize: size } : undefined}>
      {children}
    </span>
  );
}
