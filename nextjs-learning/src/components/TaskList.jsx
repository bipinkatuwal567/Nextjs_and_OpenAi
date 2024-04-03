import React from "react";
import prisma from "../utils/db";
import Link from "next/link";

const fetchTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const TaskList = async () => {
  const tasks = await fetchTasks();

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <div className="flex w-full justify-between items-center border rounded-md px-3 py-2">
          <h2 className="text-lg">{task.content}</h2>
          <div className="flex gap-6 items-centers">
            <Link className="badge badge-success p-3 rounded" href={"#"}>
              Edit
            </Link>
            <button className="badge badge-error p-3 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
