import { Car } from "types";
import { axios, ENDPOINTS } from "config";
import { carSchema, getCarsParamsSchema } from "schemas";
type returnType={
    car?: Car
}
export function getCar(
  stockNumber: string
): Promise<returnType> {
  console.log(stockNumber,'kir 222');
  
  return axios
    .get<returnType>(`${ENDPOINTS.car}/${stockNumber}`)
    .then(({ data: { car, ...rest } }) => {
      return {car: carSchema.parse(car),}
    })
}
