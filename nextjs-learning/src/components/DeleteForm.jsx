"use client";
import React from "react";
import { deleteTask } from "../actions/actions";
import { useFormStatus } from "react-dom";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="badge badge-error p-3 rounded"
      disabled={pending}
    >
      {pending ? "Deleting.." : "Delete"}
    </button>
  );
}

const DeleteForm = ({ id }) => {
  return (
    <form
      action={deleteTask}
    >
      <input type="hidden" value={id} name="id" />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
