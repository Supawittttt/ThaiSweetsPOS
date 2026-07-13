import styled from 'styled-components';

export const PrimaryButton = styled.button`
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  color: white;
  background: var(--primary);
  font-weight: 800;
  box-shadow: 0 8px 18px rgba(68,105,2,.16);
`;

export const SurfaceCard = styled.section`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
`;
