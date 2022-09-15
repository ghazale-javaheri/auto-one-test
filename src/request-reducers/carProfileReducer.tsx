import { Reducer } from "react";
import { dataReducderBaseState, Car } from "types";

export const SET_CAR = "SET_CAR" as const;
export const SET_ERROR = "SET_ERROR" as const;

export type carReducerState= {
  car?: Car | null
}  & dataReducderBaseState

export type carReducerAction = {type: typeof SET_CAR | typeof SET_ERROR, car?: Car, error?: string}

export type carProfileReducerType= Reducer<carReducerState, carReducerAction>


const carProfileReducer: carProfileReducerType= (state , action) => {

  switch (action.type) {  
    case SET_CAR:
      return {
        car: action.car,
        isLoading: false,
        hasError: false
      };
    case SET_ERROR:
      return {
        car: null,
        isLoading: false,
        hasError: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default carProfileReducer;
