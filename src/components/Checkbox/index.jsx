import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./styles.css";
import { updateTodo } from "../../store";
import { useDispatch } from "react-redux";

const CheckBox = ({ isDone, id }) => {
  const dispatch = useDispatch();
  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox.Root
          checked={isDone}
          className="CheckboxRoot"
          onCheckedChange={() => dispatch(updateTodo(id))}
          id="c1"
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
};

export default CheckBox;
