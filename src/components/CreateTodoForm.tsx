import React, { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./createTodoForm.module.css";
import { useTodo } from "../reducers/todoReducer";

const CreateTodoForm: React.FC = () => {
  const [name, setName] = useState<string>("");

  const { addTodo } = useTodo();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTodo(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="task-name"
        id="task-name"
        placeholder="Create a new task"
        onChange={(event) => setName(event.target.value)}
        value={name}
        required
      />
      <button type="submit" className={styles.formButton}>
        Create
        <PlusCircle weight="bold" />
      </button>
    </form>
  );
};

export default CreateTodoForm;
