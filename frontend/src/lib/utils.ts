import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})

export type Task = z.infer<typeof TaskSchema>;
