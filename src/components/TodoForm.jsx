import React from "react";

const TodoForm = ({ handleSubmit, todo, setTodo, date, setDate }) => {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <label htmlFor="">Task</label>
        <input
          className="input1"
          type="text"
          value={todo}
          placeholder="add task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <label htmlFor="">Day&Time</label>
        <input
          className="input2"
          type="text"
          value={date}
          placeholder="add day&time"
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn-addtask" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
