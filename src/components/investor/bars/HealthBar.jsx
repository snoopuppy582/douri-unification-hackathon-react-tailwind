import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(to right, #F5EDE0, #FFF5E8);
  border-radius: 12px;
  overflow: hidden;
  height: 14px;
  border: 1px solid #E8DDD0;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Fill = styled.div`
  height: 100%;
  width: ${({ value }) => `${value}%`};
  background: linear-gradient(90deg, #5B8C5A 0%, #7CB342 100%);
  transition: width 0.5s ease-out;
  box-shadow: 0 2px 4px rgba(91, 140, 90, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent);
    border-radius: 12px 12px 0 0;
  }
`;

export default function HealthBar({ value }) {
  return (
    <Wrap aria-label="health">
      <Fill value={value} />
    </Wrap>
  );
}