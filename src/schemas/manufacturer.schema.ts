import { array, object, string } from "zod";

export const manufacturerSchema = object({
  name: string(),
  models: array(object({ name: string() })),
});
