import type { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  handleToggle: (id: Todo["id"]) => () => void;
  handleEdit: (id: Todo["id"]) => () => void;
  handleDelete: (id: Todo["id"]) => () => void;
};

const TodoList = ({
  todos,
  handleToggle,
  handleEdit,
  handleDelete,
}: TodoListProps) => {
  return (
    <ul>
      {todos.map(({ id, content, isDone }) => {
        return (
          <li key={id}>
            <TodoItem
              content={content}
              isDone={isDone}
              handleToggle={handleToggle(id)}
              handleEdit={handleEdit(id)}
              handleDelete={handleDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
