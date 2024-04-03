'use server';

import { revalidatePath } from "next/cache";
import prisma from "../utils/db"

export const createTask = async (Formdata) => {
    console.log(Formdata);
    const content = Formdata.get("content");
    console.log(content);
  
    await prisma.task.create({
      data: {
        content,
      }
    })
    revalidatePath("/tasks")
  }