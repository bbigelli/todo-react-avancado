import { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../context/TodoContext';

export function TodoList() {
  const { filteredTodos } = useContext(TodoContext);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}