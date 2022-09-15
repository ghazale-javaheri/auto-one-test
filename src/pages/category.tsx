import React from "react";
import FilterWrapper from "components/filter-wrapper";
import Grid from "@mui/material/Grid";
import useRequestCars from "hooks/useRequestCars";
import useFilters from "hooks/useFilters";
import { MediaCarCard } from "components/car-card";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

export const CategoryPage = () => {
  const { filters, setFilters } = useFilters();
  
  const data = useRequestCars(filters);

  const pager= (event: React.ChangeEvent<unknown>, page: number)=>{
      setFilters({...filters,page})
  }

  return (
    <Grid container direction="row" mt={6}>
      <Grid item justifyContent="center" xs={4} pr={6}>
        <FilterWrapper />
      </Grid>
      <Grid item container direction="column" xs={8}>
        {data?.totalCarsCount && (
          <>
            <Typography variant="h1" mb={3}>
              Available Cars
            </Typography>
            <Typography variant="body1">{`Showing 10 of ${data?.totalCarsCount}`}</Typography>
          </>
        )}
        <Grid>
          {data?.items?.map?.((car) => (
            <MediaCarCard key={car?.stockNumber} {...car} />
          ))}
        </Grid>
        <Grid item>
          <Pagination onChange={pager} count={data?.totalPageCount} showFirstButton showLastButton />

        </Grid>
      </Grid>
    </Grid>
  );
};
