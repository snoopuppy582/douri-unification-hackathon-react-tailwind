import styled from 'styled-components';
import StyledButton from '../StyledButton.jsx';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 2px solid #E8DDD0;
  border-radius: 16px;
  padding: 16px 18px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(139, 111, 71, 0.12);
  }
`;

const Label = styled.span`
  font-size: 15px;
  color: #2C2C2C;
  font-weight: 600;
  flex: 1;
`;

const CompletedBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #5B8C5A 0%, #7CB342 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(91, 140, 90, 0.3);
`;

export default function TodoTaskItem({ label, completed, onComplete }) {
  return (
    <Item>
      <Label>{label}</Label>
      {completed ? (
        <CompletedBadge>
          <span>✓</span>
          <span>완료됨</span>
        </CompletedBadge>
      ) : (
        <StyledButton variant="accent" onClick={onComplete} className="text-sm px-4 py-2">
          완료하기
        </StyledButton>
      )}
    </Item>
  );
}