// import { useMediaQuery, useTheme } from '@mui/material';
import './App.css';
import Home from './Components/BeforeLogin/Home';
import NavbarBefore from './Components/BeforeLogin/Navbar/NavbarBefore';
import {beforeHomeObj} from './Components/BeforeLogin/Home/Data'
import { useMediaQuery,useTheme } from '@mui/material';

function App() {
   //theme instance
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className="App">
     <>
    <NavbarBefore matches={matches} />
    <Home  {...beforeHomeObj}/>
     </>
    </div>
  );
}

export default App;
