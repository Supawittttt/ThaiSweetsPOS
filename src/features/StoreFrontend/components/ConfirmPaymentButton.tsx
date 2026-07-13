import styled from 'styled-components';
import { Icon } from '../../../components/Icon';
import { PrimaryButton } from '../../../components/styled';

interface ConfirmPaymentButtonProps {
  onConfirm: () => void;
}

const Button = styled(PrimaryButton)`
  width: 100%;
  min-height: 60px;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 20px;
  border-radius: 14px;
  font-size: 18px;
`;

export function ConfirmPaymentButton({ onConfirm }: ConfirmPaymentButtonProps) {
  return (
    <Button type="button" onClick={onConfirm}>
      Confirm Payment <Icon>check_circle</Icon>
    </Button>
  );
}
