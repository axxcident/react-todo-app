import React from "react";
import { Todo } from "../models/models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css"; // again, detta behövs inte.

interface SingleTodoProps {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.task}</span>

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
