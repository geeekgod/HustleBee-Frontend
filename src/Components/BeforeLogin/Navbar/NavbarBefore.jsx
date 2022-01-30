import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
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
                HUSTLEBEE
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
                    color: "#ca3838",
                  }}
                >
                  HOME
                </Typography>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  BROWSE JOB
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
                  CATEGORIES
                </Typography>
                {/* Dropdown Items */}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>HELLO</MenuItem>
                </Menu>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  CONTACT
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
                      background: "#ffdf00",
                      color: "#000",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "#FFBE0B",
                      },
                    }}
                  >
                    Sign Up
                  </CustomBtn>

                  <CustomBtn
                    sx={{
                      background: "#ffdf00",
                      color: "#000",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "#FFBE0B",
                      },
                    }}
                  >
                    Log In
                  </CustomBtn>
                </Box>
              ) : (
                <IconButton size="large"  onClick={() => setOpenDrawer(true)}>
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
