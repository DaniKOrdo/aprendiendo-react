import { useState } from "react";

const todoArrayList = [
  { id: 0, name: "Create Vite + React Project", done: true },
  { id: 1, name: "npm intall", done: true },
  { id: 2, name: "npm dev", done: false },
];

function App() {
  const [todoList, setTodoList] = useState(todoArrayList);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = event.target.elements[0].value.trim();
    if (!inputValue) return;
    const id = todoList.length;
    setTodoList([...todoList, { id: id, name: inputValue, done: false }]);
    event.target.elements[0].value = ''
  };

  const handleCheck = (event) => {
    const id = event.target.id;
    const checked = event.target.firstChild.checked;

    setTodoList(todoList.map(todo => todo.id.toString() === id ? {...todo, done: !checked} : todo));
    event.target.firstChild.checked = !checked; // TODO: Check this
    console.log(todoList);
  };

  return (
    <div className="container flex flex-col items-center mx-auto text-2xl">
      <h1 className="text-4xl p-6">To-Do List</h1>
      <ul className="w-1/2">
        {todoList.map(({ id, name, done }) => (
          <li id={id.toString()} key={id} onClick={handleCheck}>
            <input
              type="checkbox"
              defaultChecked={done}
              className="mr-2 w-4 h-4"
            />
            {name}
          </li>
        ))}
      </ul>
      <form className="flex p-6" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded p-4"
          placeholder="Add new ToDo... "
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-4xl py-2 px-5 rounded"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default App;