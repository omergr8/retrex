import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: { default: "black" },
    primary: {
      main: "#4c2872",
    },
    secondary: {
      main: "#fff",
    },
    // green: {
    //   main: "rgb(19,170,65)",
    // },
    // alphaColor: {
    //   main: "rgba(66,66,66,0.75)",
    // },
  },
});
export { theme };
