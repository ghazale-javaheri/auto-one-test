import { useEffect, useReducer } from "react";
import { getManufacturers } from "apis";
import mamufacturerReducer from "request-reducers/manufacturerReducer";
import type{ manufacturerReducerType } from "request-reducers/manufacturerReducer";

const useRequestManufacturer = () => {
  const [state, dispatch] = useReducer<manufacturerReducerType >(mamufacturerReducer, {
    isLoading: true,
    manufacturer: null,
    hasError: false
  });

 
  useEffect(() => {
    getManufacturers()
      .then(result => {

        dispatch({ type: "SET_MANUFACTURER", manufacturer: result });
      })
      .catch(err => {

        dispatch({ type: "SET_ERROR", error: "Error loading data" });
      });
  }, []);

  return  state
};

export default useRequestManufacturer;
