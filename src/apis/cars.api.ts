import { Car, GetCarsParams, NoUndefinedField, Paginated } from "types";
import { axios, ENDPOINTS } from "config";
import { carSchema, getCarsParamsSchema } from "schemas";
type returnType ={
  cars: Array<unknown>;
  totalPageCount: number;
  totalCarsCount: number;
} 
export function getCars(
  getCarsParams?: NoUndefinedField<GetCarsParams>, 
):Promise<Paginated<Car>> {
  return axios
    .get<returnType>(ENDPOINTS.cars, {
      params: getCarsParamsSchema.parse(getCarsParams),
    })
    .then(({ data: { cars, ...rest } }) => ({
      items: cars.map((item: unknown) => carSchema.parse(item)),
      ...rest,
    }));
}
