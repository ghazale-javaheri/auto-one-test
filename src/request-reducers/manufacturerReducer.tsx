import { Reducer } from "react";
import { dataReducderBaseState, Manufacturer } from "types";
import { z } from "zod";

export const SET_MANUFACTURER = "SET_MANUFACTURER" as const;
export const SET_ERROR = "SET_ERROR" as const;

export type manufacturerReducerState= {
  manufacturer?: Manufacturer[] |null
}  & dataReducderBaseState

type manufacturerReducerAction = {type: typeof SET_MANUFACTURER | typeof SET_ERROR, manufacturer?: Manufacturer[], error?: string}

export type manufacturerReducerType= Reducer<manufacturerReducerState, manufacturerReducerAction>

const mamufacturerReducer: manufacturerReducerType= (state , action) => {

  switch (action.type) {
    case SET_MANUFACTURER:
      return {
        manufacturer: action.manufacturer,
        isLoading: false,
        hasError: false
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default mamufacturerReducer;
