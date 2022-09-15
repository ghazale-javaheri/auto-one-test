import { Reducer } from "react";
import { dataReducderBaseState, Color } from "types";

export const SET_COLORS = "SET_COLORS" as const;
export const SET_ERROR = "SET_ERROR" as const;

export type ColorReducerState= {
  colors?: Color[] | null
}  & dataReducderBaseState

export type ColorReducerAction = {type: typeof SET_COLORS | typeof SET_ERROR, colors?: Color[], error?: string}

export type colorReducerType= Reducer<ColorReducerState, ColorReducerAction>


const colorReducer: colorReducerType= (state , action) => {

  switch (action.type) {  
    case SET_COLORS:
      return {
        colors: action.colors,
        isLoading: false,
        hasError: false
      };
    case SET_ERROR:
      return {
        colors: null,
        isLoading: false,
        hasError: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default colorReducer;
