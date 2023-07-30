import { useEffect, useState } from "react";
import { Todo } from "./types";
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

const todoArrayList: Todo[] = [
  { id: 0, name: "Create Vite + React Project", done: true },
  { id: 1, name: "npm install", done: true },
  { id: 2, name: "do testing", done: false },
];

const todoListFromLocalStorage = localStorage.getItem("todoList");

function App() {
  const [todoList, setTodoList] = useState(
    todoListFromLocalStorage
      ? JSON.parse(todoListFromLocalStorage)
      : todoArrayList
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = event.target.elements[0].value.trim();
    if (!inputValue) return;
    const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
    setTodoList([
      ...todoList,
      { id: lastId + 1, name: inputValue, done: false },
    ]);
    event.target.elements[0].value = "";
  };

  const handleCheck = (id: number) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newTodoList);

    if (newTodoList.find((todo) => todo.id === id)?.done) {
      const audio = new Audio("/sounds/success.mp3");
      audio.play();
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDeleting: true } : todo
    );
    setTodoList(updatedTodoList);

    setTimeout(() => {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    }, 800);
  };

  return (
    <div className="container flex flex-col items-center mx-auto text-2xl max-w-screen-md px-4">
      <h1 className="text-4xl p-6">To-Do List</h1>
      <TodoList
        todoList={todoList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <FormTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
