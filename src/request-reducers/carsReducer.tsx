import { Reducer } from "react";
import { dataReducderBaseState, Car, Paginated } from "types";

export const SET_CARS = "SET_CARS" as const;
export const SET_ERROR = "SET_ERROR" as const;

export type carReducerState= dataReducderBaseState & Partial<Paginated<Car>> 

export type carReducerAction = {type: typeof SET_CARS | typeof SET_ERROR} & carReducerState

export type carReducerType= Reducer<carReducerState, carReducerAction>


const carReducer: carReducerType= (state , action) => {

  switch (action.type) {  
    case SET_CARS:
      return {
       ...action,
        isLoading: false,
        hasError: false
      };
    case SET_ERROR:
      return {
        ...action,
        isLoading: false,
        hasError: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default carReducer;
