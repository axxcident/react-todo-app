import React from "react";
import "./styles.css"; // behövs denna import? funkade innan utan.
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface TodosProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<TodosProps> = ({ todos, setTodos }: TodosProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
