"use server";

import { revalidatePath } from "next/cache";
import prisma from "../utils/db";
import { redirect } from "next/navigation";
import { z } from "zod";

// export const createTask = async (formdata) => {
//   const content = formdata.get("content");

//   await prisma.task.create({
//     data: {
//       content,
//     },
//   });
//   revalidatePath("/tasks");
// };

const createTaskSchemea = z.object({
  content: z.string().min(5),
})

export const createTaskCustom = async (formStatus, formdata) => {
  const content = formdata.get("content");
  await new Promise(resolve => setTimeout(resolve, 2000));

  try {
    createTaskSchemea.parse({content})
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return {
      message: "success"
    }
  } catch (error) {
    return {
      message: "error"
    }
  }
};

export const deleteTask = async (id) => {
  await prisma.task.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formdata) => {
  console.log("formdata : ", formdata);

  const id = formdata.get("id");
  const content = formdata.get("content");
  const completed = formdata.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: !!completed 
    },
  });

  redirect("/tasks")
};
