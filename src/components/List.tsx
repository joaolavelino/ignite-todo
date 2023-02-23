import React from "react";
import { TodoType } from "../models";
import styles from "./list.module.css";
import ListCard from "./ListCard";

interface ListProps {
  list: TodoType[];
  completeFn: (id: string) => void;
  removeFn: (id: string) => void;
}

const List: React.FC<ListProps> = ({ list, completeFn, removeFn }) => {
  return (
    <section className={styles.listContainer}>
      <div className={styles.listHeader}>
        <div className={styles.listHeaderPart}>
          <span className={styles.listHeaderCreated}>Tasks created</span>
          <span className={styles.listHeaderQuantity}>{list.length}</span>
        </div>
        <div className={styles.listHeaderPart}>
          <span className={styles.listHeaderCompleted}>Completed</span>
          <span className={styles.listHeaderQuantity}>
            {list.filter((el) => el.completed == true).length} of {list.length}
          </span>
        </div>
      </div>
      <div className={styles.listBody}>
        {list?.map((todo) => (
          <ListCard
            todo={todo}
            key={todo.id}
            removeFn={(id) => removeFn(id)}
            completeFn={(id) => completeFn(id)}
          />
        ))}
        {/* {list.length == 0 && (
          <div className={styles.emptyList}>
            <ClipboardText size={60} weight="light" />
            <h3>Your list is still empty</h3>
            <p>Create your first task and start organizing your day</p>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default List;
