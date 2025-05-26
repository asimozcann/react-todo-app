import Card from "../UI/Card";

const TodoList = ({ todo, removeTodo, toggleComplete, onEdit }) => {
  return (
    <div>
      <ul className="mt-4">
        <li>
          <Card className="py-3 flex justify-between items-center">
            <span className={todo.completed ? "line-through text-red-600" : ""}>
              {todo.text}
            </span>
            <div className="gap-2 flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="w-4 h-4 accent-green-600/25 cursor-pointer"
                title="Seç"
              />
              <i
                onClick={onEdit}
                className="fa-solid fa-pencil text-yellow-500 cursor-pointer"
                title="Düzenle"
              ></i>
              <i
                onClick={removeTodo}
                className="fa-solid fa-trash text-red-600 cursor-pointer"
                title="Sil"
              ></i>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
