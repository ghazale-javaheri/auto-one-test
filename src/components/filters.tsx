import React from "react";
import type { ReactElement } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import type { SelectInputProps } from "@mui/material/Select/SelectInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export type FiltersParams<DataType> = {
  data?: DataType[];
  title?: string;
  nonselectText?: string;
  value?: DataType | null;
  placeholder?: string;
  onChange: SelectInputProps<DataType>["onChange"];
  renderItem: (data: DataType, index: number) => ReactElement;
};
const Filters = <T,>(params: FiltersParams<T>) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ width: "100%", pb: 3 }}
    >
      <Grid item xs={12}>
        <Typography>{params?.title}</Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center" sx={{ px: 2 }}>
        <InputLabel id="simple-select-label">
          {params?.placeholder}
        </InputLabel>
        <Select
          labelId="simple-select-label"
          sx={{ width: "100%" }}
          value={params?.value ?? ""}
          onChange={params?.onChange}
        >
           <MenuItem value="">
            <em>{params.nonselectText}</em>
          </MenuItem>
          {params?.data?.map((item, index) => params.renderItem(item, index))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default Filters;
