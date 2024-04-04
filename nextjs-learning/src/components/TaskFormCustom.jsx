"use client";
import React, { useEffect } from "react";
import { createTaskCustom } from "../actions/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className=" join-item btn btn-primary" disabled={pending}>
      {pending ? "Creating..." : "Create Task"}
    </button>
  );
};

const TaskFormCustom = () => {
  const [formState, formAction] = useFormState(createTaskCustom, {
    message: null,
  });

  useEffect(() => {
    if(formState.message === "error"){
      toast.error("There was an error creating task")
      return
    }

    if(formState.message){
      toast.success("Task created")
      return
    }
  }, [formState])

  return (
    <form action={formAction}>
      <div className="w-full join">
        <input
          type="text"
          className="input input-bordered w-full join-item"
          name="content"
          placeholder="Type here..."
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
