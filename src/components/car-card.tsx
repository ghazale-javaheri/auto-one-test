import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Car } from "types";
import useGetMarked from "hooks/useGetMarked";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "config";

export const MediaCarCard: React.FC<Car> = ({
  color,
  mileage,
  fuelType,
  pictureUrl,
  stockNumber,
  modelName,
}) => {
  const { marked } = useGetMarked();

  return (
    <Card sx={{ display: "flex", maxWidth: "100%", py: 2, px: 3, mb: 6 }}>
      <CardMedia
        component="img"
        sx={{ width: 60, objectFit: "contain", mr: 2 }}
        image={pictureUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", padding: "0 0 0 8px" }}>
          <Typography component="div" variant="h2">
            {modelName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {`stock #${stockNumber}- ${mileage.number} ${mileage.unit}- ${fuelType} - ${color}`}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 2,
          }}
        >
          <Link
            underline="hover"
            component={RouterLink}
            to={`${routes?.profile.url}${stockNumber}`}
          >
            view detals
          </Link>
          <IconButton sx={{ml:"auto"}}>
            {marked.includes(String(stockNumber)) ? (
              <BookmarkAddedIcon />
            ) : (
              <BookmarkBorderIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
