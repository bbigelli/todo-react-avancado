<<<<<<< HEAD
import React, { memo } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoItem = memo(({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </div>
  );
});

=======
import React, { memo } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoItem = memo(({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </div>
  );
});

>>>>>>> cbe4e88c87609aeee5756187e5cbe516bfe221e2
export default TodoItem;