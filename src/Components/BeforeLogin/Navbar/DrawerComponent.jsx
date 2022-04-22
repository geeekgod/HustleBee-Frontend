import React from "react";
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,

} from "@mui/material";

import CustomBtn from "../Main/CustomBtn";
// import CtaButton from "../Main/CtaButtons";


const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
    anchor="right"
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 10 }}>
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 10 }}>
            <ListItemText>Browse Jobs</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 10 }}>
            <ListItemText>Contact</ListItemText>
          </ListItemIcon>
        </ListItem>
        {/* buttons */}
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <Box sx={{marginTop: "20px" }}>
          <Link to="/">
                    <CustomBtn
                      sx={{
                       width:"80%",margin:"auto",
                        display: "flex",alignItems:"center",justifyContent:"center"
                      }}
                    >
                      Sign Up
                    </CustomBtn>
                  </Link>
          </Box>
                
                    <Box sx={{marginTop: "20px" }}>
                    <Link to="/signin">
                    <CustomBtn
                      sx={{
                        width:"80%",margin:"auto",
                        display: "flex",alignItems:"center",justifyContent:"center"
                      }}
                    >
                      Log In
                    </CustomBtn>
                    
                  </Link>
                    </Box>
               
                </Box>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
