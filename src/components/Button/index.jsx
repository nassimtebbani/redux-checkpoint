import React from "react";
import { useDispatch } from "react-redux";

export default function Button({ id }) {
  const dispatch = useDispatch();
  return <button onClick={dispatch(deleteTodo(id))}></button>;
}
