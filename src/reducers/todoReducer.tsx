import { useReducer, useEffect } from "react";
import { TodoType } from "../models";
import { v4 as uuidv4 } from "uuid";

export function useTodo() {
  enum TodoActionsKind {
    CREATE = "CREATE",
    COMPLETE = "COMPLETE",
    REMOVE = "REMOVE",
  }

  interface TodoAction {
    type: TodoActionsKind;
    payload: string;
  }

  interface StateInterface {
    todoList: TodoType[];
  }

  function todoReducer(state: StateInterface, action: TodoAction) {
    const { type, payload } = action;
    switch (type) {
      case TodoActionsKind.CREATE:
        const newTodo: TodoType = {
          id: uuidv4(),
          name: payload,
          completed: false,
        };
        return { ...state, todoList: [...state.todoList, newTodo] };
      case TodoActionsKind.COMPLETE:
        const task = state.todoList.filter((el) => el.id == payload)[0];
        const filtered = state.todoList.filter((el) => el.id !== payload);
        const changed = { ...task, completed: !task.completed };
        return { ...state, todoList: [...filtered, changed] };
      case TodoActionsKind.REMOVE:
        const removed = state.todoList.filter((el) => el.id !== payload);
        return { ...state, todoList: [...removed] };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(todoReducer, { todoList: [] });

  const addTodo = (name: string) => {
    dispatch({ type: TodoActionsKind.CREATE, payload: name });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: TodoActionsKind.REMOVE, payload: id });
  };

  const completeTodo = (id: string) => {
    dispatch({ type: TodoActionsKind.COMPLETE, payload: id });
  };

  return {
    state,
    addTodo,
    removeTodo,
    completeTodo,
  };
}
