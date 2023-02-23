import { Check, Trash } from "phosphor-react";
import React from "react";
import { TodoType } from "../models";
import styles from "./listCard.module.css";

interface ListCardProps {
  todo: TodoType;
  completeFn: (id: string) => void;
  removeFn: (id: string) => void;
}

const ListCard: React.FC<ListCardProps> = ({ todo, removeFn, completeFn }) => {
  return (
    <div className={styles.cardContainer}>
      <button
        type="button"
        onClick={() => completeFn(todo.id)}
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
        onClick={() => removeFn(todo.id)}
      >
        <Trash weight="light" />
      </button>
    </div>
  );
};

export default ListCard;
