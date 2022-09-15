import { useEffect, useReducer } from "react";
import { getCar } from "apis/car.api";
import carProfileReducer, { carProfileReducerType } from "request-reducers/carProfileReducer";

const useRequestCarProfile = (stockNumber: string ) => {
  const [state, dispatch] = useReducer<carProfileReducerType >(carProfileReducer, {
    isLoading: true,
    car: null,
    hasError: false
  });

 
  useEffect(() => {
    getCar(stockNumber)
      .then(result => {
        
        dispatch({ type: "SET_CAR", car: result.car});
      })
      .catch(() => {

        dispatch({ type: "SET_ERROR", error: "Error loading data" });
      });
  }, [stockNumber]);

  return state
  
};

export default useRequestCarProfile;
