import React from "react";
import { editTask } from "../actions/actions";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form action={editTask} className="max-w-sm p-12 border rounded-lg border-white/50">
      <div className="flex flex-col justify-center gap-2">
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          defaultValue={content}
          name="content"
          placeholder="type here..."
          required
          className="input input-bordered w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="completed" className=" label label-text">
            Completed
          </label>
          <input
            type="checkbox"
            name="completed"
            defaultChecked={completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </div>
        <button className="w-full btn btn-primary" type="submit">
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
