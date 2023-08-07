import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
})

export type Task = z.infer<typeof TaskSchema>;
