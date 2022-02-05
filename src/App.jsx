import { useMediaQuery, useTheme } from "@mui/material";
import Router from "./Router";

const App = () => {
  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Router matches={matches} />
    </>
  );
};

export default App;
