// import { useMediaQuery, useTheme } from '@mui/material';
import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import SignInPg from "./Pages/SignInPg";


function App() {
  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className="App">
      <>
      <Routes>
       <Route index path="/" element={<Landing matches={matches} />}></Route>

       <Route path="/signin" element={<SignInPg/>}>  </Route>
  
       </Routes>
       
      </>
    </div>
  );
}

export default App;
