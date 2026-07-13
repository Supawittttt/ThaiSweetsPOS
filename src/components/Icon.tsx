import type { CSSProperties, ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  fill?: boolean;
  size?: number;
}

export function Icon({ children, fill = false, size }: IconProps) {
  const style: CSSProperties | undefined = size ? { fontSize: size } : undefined;

  return (
    <span className={`material-symbols-outlined ${fill ? 'fill' : ''}`} style={style}>
      {children}
    </span>
  );
}
