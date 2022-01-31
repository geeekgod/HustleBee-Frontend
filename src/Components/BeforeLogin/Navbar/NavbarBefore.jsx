import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import { Box } from "@mui/system";

import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";
import CustomBtn from "../Main/CustomBtn";

const Navbar = ({ matches }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "20px 10px",
            }}
            component="div"
          >
            {/* logo */}
            <Box>
              <Typography
                className="navIcon"
                sx={{ fontSize: "2.4rem", color: "#616161" }}
              >
                HustleBee 🐝
              </Typography>
            </Box>

            {/* Links */}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Home
                </Typography>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Browse Jobs
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  Categories
                </Typography>
                {/* Dropdown Items */}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem sx={{ padding: "10px 40px" }} onClick={handleClose}>
                    FullTime
                  </MenuItem>
                  <MenuItem sx={{ padding: "10px 40px" }} onClick={handleClose}>
                    PartTime
                  </MenuItem>
                  <MenuItem sx={{ padding: "10px 40px" }} onClick={handleClose}>
                    Internship
                  </MenuItem>
                  <MenuItem sx={{ padding: "10px 40px" }} onClick={handleClose}>
                    Freelance
                  </MenuItem>
                </Menu>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Contact
                </Typography>
              </Box>
            )}

            {/* button links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!matches ? (
                <Box>
                  <CustomBtn
                    sx={{
                      background: "#FEEA00",
                      color: "#000",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "#ffdf00",
                      },
                    }}
                  >
                    Sign Up
                  </CustomBtn>

                  <CustomBtn
                    sx={{
                      background: "#FEEA00",
                      color: "#000",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "#ffdf00",
                      },
                    }}
                  >
                    Log In
                  </CustomBtn>
                </Box>
              ) : (
                <IconButton size="large" onClick={() => setOpenDrawer(true)}>
                  <MenuIcon fontSize="inherit" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
