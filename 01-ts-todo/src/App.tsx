import { useState } from "react";
import type { Todo } from "./types/todos";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    setTodos((prev) => [
      ...prev,
      {
        content: formValues.content as string,
        id: String(Date.now()),
        isDone: false,
      },
    ]);
  };

  const handleToggle = (id: Todo["id"]) => () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      });
    });
  };

  const handleEdit = (id: Todo["id"]) => () => {
    const result = prompt("수정 할 내용을 입력해주세요.");

    if (!result) {
      return alert("내용을 입력해주세요");
    }

    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, content: result } : todo;
      });
    });

    alert("수정이 완료되었어요");
  };

  const handleDelete = (id: Todo["id"]) => () => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });

    alert("삭제가 완료되었어요");
  };

  return (
    <div id="app">
      <h1>TodoList 🔥</h1>
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <form onSubmit={onSubmit}>
        <input type="text" name="content" />
        <button>입력</button>
      </form>
    </div>
  );
}

export default App;
