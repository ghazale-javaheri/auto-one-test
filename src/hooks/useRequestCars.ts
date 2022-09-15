import { useEffect, useReducer } from "react";
import { getCars } from "apis";
import type{ carReducerType } from "request-reducers/carsReducer";
import { GetCarsParams, NoUndefinedField } from "types";
import carReducer from "request-reducers/carsReducer";

const useRequestCars = (params:NoUndefinedField<GetCarsParams>={
  sort: 'asc', page: 1
} ) => {
  const [state, dispatch] = useReducer<carReducerType >(carReducer, {
    isLoading: true,
    hasError: false,
  });
  
  
  const queryKey= Object.values(params).reduce((prevStete, current)=> String(prevStete)+ String(current),'')
  
  useEffect(() => {    
    getCars(params)
      .then(result => {

        dispatch({ type: "SET_CARS", ...result});
      })
      .catch(() => {

        dispatch({ type: "SET_ERROR", error: "Error loading data" });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryKey]);

  return state
  
};

export default useRequestCars;
