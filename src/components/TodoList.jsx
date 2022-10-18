import React, { useState } from "react";

const TodoList = ({ todos, handleDelete }) => {
  const [clicked, setClicked] = useState(true);

  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <div
            className={clicked ? "inlist" : "inlist-line"}
            onClick={() => setClicked(!clicked)}
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
