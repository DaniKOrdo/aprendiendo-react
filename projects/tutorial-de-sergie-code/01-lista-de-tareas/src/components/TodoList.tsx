import Trash from "../icons/Trash";

function TodoList({ todoList, handleCheck, handleDelete }) {
  return (
    <ul className="w-full ">
      {todoList.map(({ id, name, done, isDeleting }) => (
        <li
          id={id}
          key={id}
          className={`flex items-center justify-between p-4 my-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors duration-300 ${
            done ? "line-through text-gray-400" : ""
          }
            ${
              isDeleting
                ? "animate-fade-up animate-reverse bg-gray-700"
                : "animate-fade-down "
            }
          }`}
        >
          <div className="round">
            <input
              id={`checkbox-${id}`}
              type="checkbox"
              checked={done}
              onChange={() => handleCheck(id)}
            />
            <label htmlFor={`checkbox-${id}`}></label>
          </div>
          <span
            className="flex-grow truncate cursor-pointer"
            onClick={() => handleCheck(id)}
          >
            {name}
          </span>
          <Trash onClick={() => handleDelete(id)} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
