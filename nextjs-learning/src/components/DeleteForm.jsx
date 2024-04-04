import React from "react";
import { deleteTask } from "../actions/actions";

const DeleteForm = async ({ id }) => {
  return (
    <form
      action={async () => {
        "use server";
        await deleteTask(id);
      }}
    >
      <button type="submit" className="badge badge-error p-3 rounded">
        Delete
      </button>
    </form>
  );
};

export default DeleteForm;
