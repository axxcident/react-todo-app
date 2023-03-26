import React from "react";
import "./styles.css"; // behövs denna import? funkade innan utan.
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface TodosProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
// setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;

const TodoList: React.FC<TodosProps> = ({ todos, setTodos }: TodosProps) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => {
          return (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map((todo) => {
          return (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
