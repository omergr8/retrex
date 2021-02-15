import "antd/dist/antd.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme/DarkModeTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
