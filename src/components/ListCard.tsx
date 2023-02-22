import { Check, Trash } from "phosphor-react";
import React from "react";
import { TodoType } from "../models";
import { useTodo } from "../reducers/todoReducer";
import styles from "./listCard.module.css";

interface ListCardProps {
  todo: TodoType;
}

const ListCard: React.FC<ListCardProps> = ({ todo }) => {
  const { completeTodo, removeTodo } = useTodo();
  return (
    <div className={styles.cardContainer}>
      <button
        type="button"
        onClick={() => completeTodo(todo.id)}
        className={
          todo.completed ? styles.completeButtonChecked : styles.completeButton
        }
      >
        {todo.completed && <Check size={12} weight="regular" />}
      </button>
      <div className={styles.cardContent}>{todo.name}</div>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => removeTodo(todo.id)}
      >
        <Trash weight="light" />
      </button>
    </div>
  );
};

export default ListCard;
