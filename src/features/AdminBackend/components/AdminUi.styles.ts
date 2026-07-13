import styled, { css } from 'styled-components';
import type { RuleSet } from 'styled-components';
import type { Tone } from '../../../types/pos';

const toneStyles: Record<Tone, RuleSet<object>> = {
  green: css`
    color: var(--primary);
    background: rgba(195, 241, 129, 0.36);
  `,
  gold: css`
    color: var(--gold);
    background: rgba(255, 222, 170, 0.6);
  `,
  blue: css`
    color: var(--blue);
    background: rgba(217, 226, 255, 0.76);
  `,
  red: css`
    color: var(--red);
    background: #ffdad6;
  `,
  silver: css`
    color: #59606b;
    background: #e8ebef;
  `,
  bronze: css`
    color: #8a4c1b;
    background: #f4dfc8;
  `,
  neutral: css`
    color: var(--muted);
    background: var(--surface-mid);
  `
};

const resolveTone = (tone: Tone = 'green') => toneStyles[tone] || toneStyles.green;

export const PageTitleRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 22px;

  h2 {
    margin: 0;
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 0;
  }

  p {
    margin: 5px 0 0;
    font-size: 16px;
    line-height: 24px;
    color: var(--muted);
  }

  @media (max-width: 860px) {
    align-items: start;
    flex-direction: column;
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

interface ToneProps {
  $tone?: Tone;
}

interface MiniProps {
  $round?: boolean;
}

export const MetricRoot = styled.article<ToneProps>`
  position: relative;
  min-height: 174px;
  padding: 24px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid rgba(225, 227, 228, 0.9);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  > div {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    margin-bottom: 18px;
    ${({ $tone }) => resolveTone($tone)}
  }

  > span {
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 5px 9px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 800;
    ${({ $tone }) => resolveTone($tone)}
  }

  p {
    margin: 0 0 4px;
    color: var(--muted);
    font-size: 14px;
    font-weight: 700;
  }

  h3 {
    margin: 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 800;
    letter-spacing: 0;
  }

  @media (max-width: 560px) {
    h3 {
      font-size: 34px;
      line-height: 42px;
    }
  }
`;

export const PanelRoot = styled.section`
  margin-bottom: 24px;
  padding: 24px;
  background: var(--surface);
  border: 1px solid rgba(225, 227, 228, 0.9);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  h3 {
    margin: 0;
    font-size: 24px;
    line-height: 32px;
    font-weight: 750;
  }

  header button {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--primary);
    background: transparent;
    font-weight: 800;
  }

  @media (max-width: 560px) {
    padding: 18px;
  }
`;

export const TableWrap = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 680px;
  }

  th {
    padding: 0 14px 14px;
    border-bottom: 1px solid var(--line);
    color: var(--muted);
    font-size: 12px;
    line-height: 16px;
    font-weight: 750;
    text-align: left;
  }

  td {
    padding: 16px 14px;
    border-bottom: 1px solid rgba(237, 238, 239, 0.9);
    color: var(--text);
    font-size: 15px;
    vertical-align: middle;
  }

  tr:hover td {
    background: #fbfcfa;
  }

  @media (max-width: 560px) {
    table {
      min-width: 620px;
    }
  }
`;

export const BadgeRoot = styled.span<ToneProps>`
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(68, 105, 2, 0.12);
  font-size: 12px;
  font-weight: 800;
  ${({ $tone }) => resolveTone($tone)}
`;

export const MiniRoot = styled.div<MiniProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  img,
  > span {
    width: 46px;
    height: 46px;
    border-radius: ${({ $round }) => ($round ? '999px' : '10px')};
    display: grid;
    place-items: center;
    object-fit: cover;
    color: var(--primary);
    background: var(--surface-low);
    font-weight: 800;
  }

  b {
    display: block;
    font-size: 15px;
  }
`;

export const ToggleRoot = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(225, 227, 228, 0.75);

  b {
    color: var(--text);
    font-size: 15px;
  }

  p {
    margin: 4px 0 0;
    color: var(--soft);
    font-size: 13px;
    font-weight: 500;
  }

  input {
    display: none;
  }

  > span {
    width: 46px;
    height: 26px;
    flex: 0 0 auto;
    position: relative;
    border-radius: 999px;
    background: var(--surface-high);
  }

  > span::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
    transition: transform 0.18s ease;
  }

  input:checked + span {
    background: var(--primary);
  }

  input:checked + span::after {
    transform: translateX(20px);
  }
`;
