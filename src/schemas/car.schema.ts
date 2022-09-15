import { enum as zodEnum, number, object, string } from "zod";
import { colorSchema } from "./color.schema";

export const carSchema = object({
  stockNumber: number(),
  manufacturerName: string(),
  modelName: string(),
  mileage: object({
    number: number(),
    unit: zodEnum(["km", "mi"]),
  }),
  fuelType: zodEnum(["Diesel", "Petrol"]),
  color: colorSchema,
  pictureUrl: string().url(),
});

export const getCarsParamsSchema = object({
  manufacturer: string().nullish(),
  color: string().nullish(),
  sort: string().nullish().default("asc"),
  page: number().nullish().default(1),
});
