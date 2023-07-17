function FormTodo({ addTodo }) {
  return (
    <form className="flex w-full py-6" onSubmit={addTodo}>
      <input
        type="text"
        className="w-full rounded p-4"
        placeholder="Add new ToDo... "
      />
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-700 text-4xl py-2 px-5 rounded"
      >
        +
      </button>
    </form>
  );
}

export default FormTodo;
