import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import "./styles.css";
import { addTodo } from "../../store";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    newTask.id = Math.random();
    newTask.isDone = false;
    dispatch(addTodo(newTask));
  };
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild>
        <button
          className="Button violet"
          size="large"
          onClick={() => setIsOpen(true)}
        >
          Add New Task
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Task</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="title">
                Name
              </label>
              <input className="Input" name="title" placeholder="Name" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="desc">
                Description
              </label>
              <input className="Input" name="desc" placeholder="Description" />
            </fieldset>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button className="Button green" type="submit">
                  Add
                </button>
              </Dialog.Close>
            </div>
          </form>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddTask;
