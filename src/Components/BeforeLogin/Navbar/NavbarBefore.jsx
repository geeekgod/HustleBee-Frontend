import React, { useState } from "react";
import { Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";

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
            component='div'
          >
            {/* logo */}
            <Box>
              <Typography
                className='navIcon'
                sx={{ fontSize: "2.4rem", color: "#2667FF" }}
              >
                Hustle 🐝
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
                    fontSize:"1.2rem",
                   
                  }}
                >
                  Home
                </Typography>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                    fontSize:"1.2rem",
                  }}
                >
                  Browse Jobs
                </Typography>
                <a href='#categories'>
                  <Typography
                    sx={{
                      marginRight: "20px",
                      cursor: "pointer",
                      color: "#616161",
                      fontSize:"1.2rem",
                    }}
                    aria-controls='basic-menu'
                    aria-haspopup='true'
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Categories
                  </Typography>
                </a>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                    fontSize:"1.2rem",
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
                  <a href="#signup">
                  <CustomBtn
                    sx={{
                      background: "rgba(97, 97, 97,.5)",
                      color: "#000",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "rgba(97, 97, 97,.2)",
                      },
                    }}
                  >
                    Sign Up
                  </CustomBtn>
                  </a>
               
                  <a href="#login">
                  <CustomBtn
                    sx={{
                      background: " rgba(97, 97, 97,.5)",
                      color: "#000",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "rgba(97, 97, 97,.2)",
                      },
                    }}
                  >
                    Log In
                  </CustomBtn>
                  </a>
              
                </Box>
              ) : (
                <IconButton size='large' onClick={() => setOpenDrawer(true)}>
                  <MenuIcon fontSize='inherit' />
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
