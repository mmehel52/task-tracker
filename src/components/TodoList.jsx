const TodoList = ({ todos, handleDelete, handleComplete }) => {
  return (
    <ul className="allTodos">
      {todos.map((t, index) => (
        <li className="singleTodo">
          <div
            key={index}
            onClick={() => handleComplete(t.id)}
            className={t.isComplete ? "inlist-line" : "inlist"}
          >
            <span className="todoText" key={t.id}>
              {t.todo}
            </span>
            <span className="todoDate">{t.date}</span>
          </div>

          <button className="btn-delete" onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
