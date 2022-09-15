import { createTheme } from "@mui/material/styles";
import { height } from "@mui/system";
declare module "@mui/material/styles" {
  interface Palette {
    main: string;
    "on-main": string
    "main-high-emphasis": string
    texts: string
    disable: string;
  }
  interface PaletteOptions {
       main:string
       "main-high-emphasis": string
      "on-main": string
      texts: string
      disable: string;
  }
}

export const theme = createTheme({
  palette: {
    "main-high-emphasis": "#d37324",
    "on-main": "#ffffff",
    main: "#ea7f28",
    disable: "#ededed",
    texts: "#4a4a4a"
  },
  spacing:4,
  typography:(palette)=>({
      h1: {
          fontSize: "32px",
          fontWeight: 700
        },
      h2: {
          fontSize: "18px",
          fontWeight: 700
      },
      body1:{
          color: palette.texts,
          fontSize: "14px",
          fontWeight: 500
      },
      body2:{
        color: palette.texts,
          fontSize: "12px",
          fontWeight: 500
      }
  }),
  components: {
    // Name of the component
    MuiButton:{
      styleOverrides:{
        root:({theme}) =>({
          background: theme.palette['main'],
          color: "#ffffff",
          ":hover":{
            background: theme.palette['main-high-emphasis'],
          },
          height: "32px",
          width: "128px"

        })
      }
    },
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root:  ({ theme }) => ({
            color: theme.palette.main,
            textDecoration: "none"
          }),
        underlineHover:({ theme }) => ({
          color: theme.palette["main-high-emphasis"],
        }),
      },
    },
  },
});
