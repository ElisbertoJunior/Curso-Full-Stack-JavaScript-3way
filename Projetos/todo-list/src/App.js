import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

  const [todo, setTodo] = useState("");

  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={({ target }) => setTodo(target.value)}
          type="text"
          name="todo"
          placeholder="Add Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todos.map(({ text, id }) => (
          <li key={id}>
            {text}
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => {
                const removeItem = todos.filter((todo) => todo.id !== id);
                 setTodos(removeItem)
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
