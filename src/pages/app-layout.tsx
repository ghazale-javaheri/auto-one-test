import React from "react";

import type{ FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Box from "@mui/material/Box";

const AppLayout:FC<PropsWithChildren>= ()=> {
    return ( 
        <div>
            <Header />
            <Box mx={6}>
                 <Outlet />
            </Box>
           
        </div>
     );
}

export default AppLayout;