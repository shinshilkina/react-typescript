import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

// string[]
// function Todos(props: { items: Array<string>, children: }) {
const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {context.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={context.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
