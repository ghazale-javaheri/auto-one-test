import React from "react";
import { useParams } from "react-router-dom";
import useRequestCarProfile from "hooks/useRequestCarProfile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import useGetMarked from "hooks/useGetMarked";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

type ICarProfileRouteParam = {
  id: string;
};

export const CarProfile = () => {
  const { id: stockNumber } = useParams<ICarProfileRouteParam>();
  if (!stockNumber) {
    throw Error("id is required");
  }
  const { car } = useRequestCarProfile(stockNumber);
  const { setMarked, marked } = useGetMarked();


  return (
    <Box display="flex" flexDirection="column" minHeight={"100vh"}>
      <Box
        component="img"
        sx={{
          background: "disable",
          objectFit: "contain",
          height: "300px",
          width: "100%",
        }}
        alt="The house from the offer."
        src={car?.pictureUrl}
      />
      <Grid container maxWidth={800} mx={"auto"} mt={6} flexGrow="1">
        <Grid item xs={7} px={3}>
          <Box
            maxWidth={"800px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography component="div" variant="h1">
              {car?.modelName}
            </Typography>
            {car && car.mileage && (
              <Typography
                variant="h2"
                mt={3}
                color="text.secondary"
                component="div"
              >
                {`stock #${stockNumber}- ${car?.mileage?.number} ${car?.mileage?.unit}- ${car?.fuelType} - ${car?.color}`}
              </Typography>
            )}
            <Typography
              variant="body1"
              mt={3}
              color="text.secondary"
              component="div"
            >
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={5}>
          <Card sx={{p:6}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                If you like this car, click the button and save it in your
                collection of favourite items.
              </Typography>
            </CardContent>
            <CardActions>
              {marked.includes(stockNumber) ? (
                <Button
                  onClick={() => setMarked(stockNumber, true)}
                  sx={{ ml: "auto" }}
                  size="small"
                >
                  <BookmarkAddedIcon sx={{width:24}}/>
                  save
                </Button>
              ) : (
                <Button
                  onClick={() => setMarked(String(stockNumber))}
                  sx={{ ml: "auto" }}
                >
                  <BookmarkBorderIcon sx={{width:24}} />
                  save
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
