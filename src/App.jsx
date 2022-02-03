// import { useMediaQuery, useTheme } from '@mui/material';
import "./App.css";
import LandingPg from "./Components/BeforeLogin/LandingPg";
import NavbarBefore from "./Components/BeforeLogin/Navbar/NavbarBefore";
import { beforeHomeObj } from "./Components/BeforeLogin/LandingPg/Data";
import { useMediaQuery, useTheme } from "@mui/material";
import Categories from "./Components/BeforeLogin/Categories";
import LandingCTA from "./Components/BeforeLogin/LandingCTA";

function App() {
  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className="App">
      <>
        <NavbarBefore matches={matches} />
        <LandingPg {...beforeHomeObj} />
        <Categories/>
        <LandingCTA/>
      </>
    </div>
  );
}

export default App;
