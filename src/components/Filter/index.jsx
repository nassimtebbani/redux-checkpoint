import React, { useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setDone } from "../../store";

const Filter = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDone(value));
  }, [value]);

  const SelectItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <Select.Item
          className={classnames("SelectItem", className)}
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="SelectItemIndicator">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      );
    }
  );
  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Task</Select.Label>{" "}
              <Select.Separator className="SelectSeparator" />
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="not">Not done</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Filter;
