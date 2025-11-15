import StyledButton from '../StyledButton.jsx';
import { useNavigate } from 'react-router-dom';

export default function DmButton() {
  const navigate = useNavigate();
  return (
    <StyledButton
      variant="outline"
      onClick={() => navigate('/chat')}
      className="text-sm px-4 py-2"
    >
      <span className="text-lg">💬</span>
      <span>대화하기</span>
    </StyledButton>
  );
}