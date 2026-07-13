import { Icon } from './Icon';

interface BrandProps {
  compact?: boolean;
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <div className="brand">
      <div className="brand-mark"><Icon fill>{compact ? 'spa' : 'storefront'}</Icon></div>
      <div>
        <h1>{compact ? 'Siam Sweets POS' : 'ThaiSweets POS'}</h1>
        <p>{compact ? 'Storefront' : 'Sanctuary of Service'}</p>
      </div>
    </div>
  );
}
