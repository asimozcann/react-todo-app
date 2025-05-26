import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Button from "../UI/Button";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setAllTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
  const updatedTodos = allTodos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setAllTodos(updatedTodos);
  setTodos(updatedTodos); // Şu anki filtreye göre burayı güncellemek daha mantıklı
};


  const deleteDoneTasks = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
      setAllTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const deleteAllTasks = () => {
    setTodos([]);
    setAllTodos([]); 
  };

  const startEditing = (todo) => {
    setEditingTodo(todo); // Düzenlenecek todo'yu ata
  };

  const handleSave = (newText) => {
    if (editingTodo) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: newText } : todo
        )
      );
      setEditingTodo(null); // Düzenleme modundan çık
    }
  };
  const displayAllTodos = () => {
    setTodos(allTodos); // Tüm listeyi göster
  };

  const displayDoneTodos = () => {
    setTodos(allTodos.filter((todo) => todo.completed)); // Sadece tamamlananlar
  };

  const displayTodo = () => {
    setTodos(allTodos.filter((todo) => !todo.completed)); // Sadece tamamlanmamışlar
  };

  return (
    <div className="max-w-[700px] mx-auto p-4">
      <h1 className="text-center text-3xl mt-4">Todo App</h1>
      <TodoForm
        setTodos={setTodos}
        setAllTodos={setAllTodos}
        editingTodo={editingTodo}
        onSave={handleSave}
      />
      <h1 className="text-center text-3xl mt-4">Todo List</h1>
      <div className="flex gap-6">
        <Button
          onClick={displayAllTodos}
          className=" transition-all hover:bg-cyan-400"
        >
          All
        </Button>
        <Button
          onClick={displayDoneTodos}
          className="bg-green-600 transition hover:bg-green-500"
        >
          Done
        </Button>
        <Button
          onClick={displayTodo}
          className="bg-blue-600 transition-all hover:bg-blue-500"
        >
          Todo
        </Button>
      </div>

      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          removeTodo={() => removeTodo(todo.id)}
          toggleComplete={toggleComplete}
          onEdit={() => startEditing(todo)}
        />
      ))}
      <div className="flex w-full gap-6 mt-4">
        <Button onClick={deleteDoneTasks} className=" bg-red-600">
          Delete Done Tasks
        </Button>
        <Button onClick={deleteAllTasks} className=" bg-red-600">
          Delete All Tasks
        </Button>
      </div>
    </div>
  );
};

export default Todo;
