import React from "react";
import {
  // Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

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
          <ListItemIcon sx={{ mx: 5 }}>
            <ListItemText>HOME</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            <ListItemText>BROWSE JOB</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            <ListItemText>CONTACT</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
