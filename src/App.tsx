import React, { useState } from "react";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Paper,
  Switch,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./components/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100vh",
    },
  })
);
// console.log("isDark");
// console.log(isDark);
function App() {
  const classes = useStyles();
  const [isDark, setIsDark] = useState(false);
  const [themeOption, setThemeOption] = useState<ThemeOptions>({
    palette: {
      type: "light",
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
    setThemeOption((prev) => ({
      ...prev,
      palette: {
        type: event.target.checked ? "dark" : "light",
      },
    }));
  };

  const theme = createMuiTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Header>
      <Paper className={classes.paper} />
    </ThemeProvider>
  );
}

export default App;
// function useStyles() {
//   throw new Error("Function not implemented.");
// }
