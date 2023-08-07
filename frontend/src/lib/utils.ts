import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: "Title is required" }).max(22, { message: "Title: max 22 characters" }),
  description: z.string().min(1, { message: "Description is required" }).max(80, { message: "Description: max 80 characters" }),
})

export type Task = z.infer<typeof TaskSchema>;
