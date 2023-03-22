import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), task: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <header>
        <h1 className="heading">Taskify</h1>
      </header>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {todos.map((t) => (
        <li>{t.task}</li>
      ))} */}
    </div>
  );
};

// Typescript typer och sätt att skriva dem
// type X = {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// };

// let xy: Y = {
//   // type(s) går att smälta ihop. Nu behöver man skriva alla abcd keys för att färdigställa xy variabeln. "Extending types"
//   a: "hej",
//   b: 11,
//   c: "grej",
//   d: 42,
// };
// interface Person {
//   namnet: string;
//   alder: number;
// }
// interface Guy extends Person {
//   profession: string;
//   experience: number;
// }
// let kille: Guy = {
//   profession: "it",
//   experience: 3,
//   namnet: "kalle",
//   alder: 42,
// };
// console.log(kille);
//  Går att extenda "interface" med "type", vice versa går det att använda "&" för att extenda "type" med "interface".

// let namn: string;
// let alder: number;
// let sifferbokstav: string | number; // union, variabel kan vara både och nu.
// let estudente: boolean;
// let hobbies: string[];
// let rollen: [string, number, boolean]; // Tuple, fixed number of variables in array.
// type Person = {
//   namnet: string;
//   alder?: number;
// };
// let person1: Person = {
//   namnet: "Ackman",
//   alder: 42,
// };
// let flerapersoner: Person[];
// let printfunction: (printas:string) => void; // type function som ska ta emot string.
// let personName:unknown; // bra att skriva ifall man inte vet vad för typ en variabel kmr bli. annars skriv :any

export default App;
