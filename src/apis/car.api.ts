import { Car } from "types";
import { axios, ENDPOINTS } from "config";
import { carSchema, getCarsParamsSchema } from "schemas";
type returnType={
    car?: Car
}
export function getCar(
  stockNumber: string
): Promise<returnType> {
  
  return axios
    .get<returnType>(`${ENDPOINTS.car}/${stockNumber}`)
    .then(({ data: { car, ...rest } }) => {
      return {car: carSchema.parse(car),}
    })
}
