// import { useMediaQuery, useTheme } from '@mui/material';
import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";


function App() {
  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className="App">
      <>
      <Routes>
       <Route path="/" element={<Landing matches={matches} />}></Route>
       </Routes>
       
      </>
    </div>
  );
}

export default App;
