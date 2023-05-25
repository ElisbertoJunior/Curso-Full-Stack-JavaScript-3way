import { useEffect, useState } from "react";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

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

  const handleEditInputChange = (event) => {
    setCurrentTodo({ ...currentTodo, text: event.target.value });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault()
    
    handleUpdatateTodo(currentTodo.id, currentTodo)

  };

  const handleUpdatateTodo = (id, updateTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updateTodo : todo
    })

    setIsEditing(false)
    setTodo(updatedItem)
  }

  const handleEditClick = (todo) => {
    setIsEditing(true)
    setCurrentTodo({...todo})
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <div>
            <h2>Editar tarefa:</h2>
          </div>
          <input
            type="text"
            name="editTodo"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit">Atualizar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={({ target }) => setTodo(target.value)}
            type="text"
            name="todo"
            placeholder="Add Todo"
          />
          <button type="submit">Add Todo</button>
        </form>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditClick(todo)} style={{ marginLeft: "5px" }}>
              Editar
            </button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => {
                const removeItem = todos.filter((item) => item.id !== todo.id);
                setTodos(removeItem);
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
