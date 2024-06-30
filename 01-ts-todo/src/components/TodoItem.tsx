import { useId } from "react";
import type { Todo } from "../types/todos";

type TodoItemProps = {
  handleToggle: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
} & Pick<Todo, "content" | "isDone">;

const TodoItem = ({
  content,
  isDone,
  handleDelete,
  handleEdit,
  handleToggle,
}: TodoItemProps) => {
  const id = useId();
  return (
    <>
      <input
        type="checkbox"
        id={id}
        value={isDone ? "checked" : ""}
        onChange={handleToggle}
      />
      <label htmlFor={id}>{content}</label>
      <button type="button" onClick={handleEdit}>
        수정
      </button>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </>
  );
};

export default TodoItem;
