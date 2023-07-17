import { useState } from "react";
import TodoList from "./components/TodoList";
import { Todo } from "./types";
import FormTodo from "./components/FormTodo";

const todoArrayList: Todo[] = [
  { id: 0, name: "Create Vite + React Project", done: true },
  { id: 1, name: "npm install", done: true },
  { id: 2, name: "do testing", done: false },
];

function App() {
  const [todoList, setTodoList] = useState(todoArrayList);

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

  const handleCheck = (id: string) => {
    const newTodoList = todoList.map((todo) =>
      todo.id.toString() === id ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newTodoList);
  };

  const handleDelete = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id.toString() !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="container flex flex-col items-center mx-auto text-2xl">
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
