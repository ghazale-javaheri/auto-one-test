import { useEffect, useReducer } from "react";
import { getColors, getManufacturers } from "apis";
import mamufacturerReducer from "request-reducers/manufacturerReducer";
import type{ colorReducerType } from "request-reducers/colorsReducer";
import colorReducer from "request-reducers/colorsReducer";

const useRequestColors = () => {
  const [state, dispatch] = useReducer<colorReducerType >(colorReducer, {
    isLoading: true,
    colors: null,
    hasError: false
  });


  useEffect(() => {
    getColors()
      .then(result => {

        dispatch({ type: "SET_COLORS", colors: result });
      })
      .catch(err => {

        dispatch({ type: "SET_ERROR", error: "Error loading data" });
      });
  }, []);

  return  state
  
};

export default useRequestColors;
