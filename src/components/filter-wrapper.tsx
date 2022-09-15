import React,{ FC, PropsWithChildren, useReducer } from "react";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import useRequestColors from "hooks/useRequestColors";
import useRequestManufacturer from "hooks/useRequestManufacturer";
import { Color, GetCarsParams, Manufacturer } from "types";
import Filters, { FiltersParams } from "./filters";
import useFilters from "hooks/useFilters";
import { SelectChangeEvent } from "@mui/material";

const FilterWrapper: FC<PropsWithChildren> = () => {
  const {
    colors,
    isLoading: colorsIsLoading,
    hasError: colorsHasError,
    error: colorsErrorMessage,
  } = useRequestColors();

  const {
    manufacturer,
    isLoading: manufacturerIsLoading,
    hasError: manufacturerHasError,
    error: manufacturerErrorMessage,
  } = useRequestManufacturer();

  const manufacturerList = manufacturer?.map(manufacturer=> manufacturer['name'])

  const renderColorItems: FiltersParams<Color>["renderItem"] = (color) => (
    <MenuItem value={color} key={color}>{color}</MenuItem>
  );

  const renderManufacturer:  FiltersParams<Manufacturer['name']>["renderItem"] = (manufacturerName) => (
    <MenuItem value={manufacturerName} key={manufacturerName}>{manufacturerName}</MenuItem>
  );

  const {setFilters, filters} = useFilters()

  const setFilter =({target}: SelectChangeEvent, type: keyof GetCarsParams) =>{
    const filter={...filters, [type]: target.value}     
    setFilters(filter) 
  }

  return (
    <Grid container>
      {colors && (
        <Filters<Color>
          data={colors}
          placeholder={"Colors"}
          value={filters?.['color']}
          renderItem={renderColorItems}
          nonselectText={"all car colors"}
          onChange={(e)=>setFilter(e, 'color')}
        />
      )}
      {manufacturer && (
        <Filters<Manufacturer['name']>
          placeholder={"Manufacturer"}
          data={manufacturerList}
          value={filters?.['manufacturer']}
          nonselectText={"all car manufacturer"}
          renderItem={renderManufacturer}
          onChange={(e)=>setFilter(e, 'manufacturer')}
        />
      )}
    </Grid>
  );
};

export default FilterWrapper;
