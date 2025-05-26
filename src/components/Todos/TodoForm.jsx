import { useState, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const TodoForm = ({ setTodos, setAllTodos, editingTodo, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setInputValue(editingTodo.text);
    } else {
      setInputValue("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    if (editingTodo) {
      onSave(inputValue);
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setAllTodos((prev) => [...prev, newTodo]);
    }

    setInputValue("");
  };

  return (
    <Card className="mt-10">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full outline-none border border-gray-300 rounded-md p-2 mb-2"
          type="text"
          placeholder="Enter a todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">
          {editingTodo ? "Update Todo" : "Add Todo"}
        </Button>
      </form>
    </Card>
  );
};

export default TodoForm;
