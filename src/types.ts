import { z } from "zod";
import {
  carSchema,
  colorSchema,
  manufacturerSchema,
  getCarsParamsSchema,
} from "schemas";

export type NoUndefinedField<T> = { [P in keyof T]?: NoUndefinedField<T[P]> };


export type Car = z.infer<typeof carSchema>;

export type GetCarsParams = z.infer<typeof getCarsParamsSchema>;

export type Color = z.infer<typeof colorSchema>;

export type Manufacturer = z.infer<typeof manufacturerSchema>;

export type Paginated<T> = {
  items: T[];
  totalPageCount: number;
  totalCarsCount: number;
};
export type dataReducderBaseState = {
  isLoading?: boolean
  hasError?: boolean
  error?: string
}


