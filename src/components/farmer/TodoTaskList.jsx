import styled from 'styled-components';
import TodoTaskItem from './TodoTaskItem.jsx';

const Wrap = styled.section`
  display: grid;
  gap: 10px;
`;

export default function TodoTaskList({ tasks, onComplete }) {
  return (
    <Wrap>
      {tasks.map((t) => (
        <TodoTaskItem
          key={t.id}
          label={t.label}
          completed={t.completed}
          onComplete={() => onComplete(t.id)}
        />
      ))}
    </Wrap>
  );
}