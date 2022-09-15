import React from "react";

import type { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";

const Header: FC = () => {
  const navigate = useNavigate()
  return (
    <Grid sx={{ p: 6, mb: 3, height: 80 , borderBottom: "1px solid ", borderColor:"disable", pb:2}} container spacing={2} alignItems="center">
      <Grid item justifyContent={"start"} xs flexGrow={1} maxHeight={"100%"}>
      <Box
        onClick={()=>navigate(routes?.root)}
        component="img"
        sx={{
            objectFit: "contain",
            height:'40px'
        }}
        alt="The house from the offer."
        src="./logo.png"
      />
      </Grid>
      <Grid item flexGrow={0} ml={4} >
        <Typography variant="body1">PurChase</Typography>
      </Grid>
      <Grid item flexGrow={0} ml={4} >
        <Typography variant="body1">My Orders</Typography>
      </Grid>
      <Grid item flexGrow={0} ml={4} >
      <Typography variant="body1">Sell</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
