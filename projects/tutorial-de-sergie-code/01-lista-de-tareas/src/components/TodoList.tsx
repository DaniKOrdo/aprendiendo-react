import Trash from "../icons/Trash";
function TodoList({ todoList, handleCheck, handleDelete }) {
  return (
    <ul className="w-full">
      {todoList.map(({ id, name, done }) => (
        <li
          id={id.toString()}
          key={id}
          className={`flex items-center justify-between p-4 my-2 bg-gray-600 rounded hover:bg-gray-500 ${
            done ? "line-through text-gray-400" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={done}
            className="mr-2 w-4 h-4 cursor-pointer"
            onChange={() => handleCheck(id.toString())}
          />
          <span
            className="flex-grow truncate cursor-pointer"
            onClick={() => handleCheck(id.toString())}
          >
            {name}
          </span>
          <Trash onClick={() => handleDelete(id.toString())} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
