import { axios, ENDPOINTS } from "config";
import { colorSchema } from "schemas";
import { Color } from "types";

export function getColors(): Promise<Color[]> {
  return axios
    .get<{ colors: Array<string> }>(ENDPOINTS.colors)
    .then((res) => res.data.colors.map((item) => colorSchema.parse(item)));
}
