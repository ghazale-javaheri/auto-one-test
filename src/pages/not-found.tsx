import React from "react";
import Header from "components/header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "config";
import Footer from "components/footer";

export default function NotFound() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />
      <Box
       flexGrow={"1"}
        maxWidth={600}
        mx="auto"
        mt={6}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
      >
        <Box
          component="img"
          sx={{
            objectFit: "contain",
            height: "40px",
          }}
          alt="The house from the offer."
          src="./logo.png"
        />
        <Typography mt={3} variant="h1">
          404 - Not Found
        </Typography>
        <Typography mt={3} variant="body1">
          <Box component="span" mr="1">
            Sorry, the page you are looking for does not exist. You can always
            go back to the
          </Box>
          <Link
            mt={3}
            ml={1}
            underline="hover"
            component={RouterLink}
            to={`${routes?.root}`}
          >
            homepage
          </Link>
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}
