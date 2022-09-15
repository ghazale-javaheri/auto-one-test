import { axios, ENDPOINTS } from "config";
import { manufacturerSchema } from "schemas";
import { Manufacturer } from "types";

export function getManufacturers(): Promise<Manufacturer[]> {
  return axios
    .get<{ manufacturers: Array<unknown> }>(ENDPOINTS.manufacturers)
    .then((res) =>
      res.data.manufacturers.map((item) => manufacturerSchema.parse(item))
    );
}
