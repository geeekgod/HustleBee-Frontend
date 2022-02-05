import React, { useState } from "react";
import { Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
// import HustleBee from '/static/img/HustleBee.svg'
import { Box } from "@mui/system";

import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";
import CustomBtn from "../Main/CustomBtn";
import { Link } from "react-router-dom";

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "50%" }}
                src='/static/img/hustlebee.png'
                alt=''
              />
            </Box>

            {/* Links */}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                    fontSize: "1.2rem",
                  }}
                >
                  Home
                </Typography>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                    fontSize: "1.2rem",
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
                      fontSize: "1.2rem",
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
                    fontSize: "1.2rem",
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
                <Box sx={{ marginTop: "20px" }}>
                  
                <Link to="/signin">
                <CustomBtn
                    sx={{
                      background: "#2667FF",
                      color: "#fff",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "#477EFF",
                      },
                    }} 
                  >
                    Sign Up
                  </CustomBtn>
                </Link>
                  
                 

                  <CustomBtn
                    sx={{
                      background: "#2667FF",
                      color: "#fff",
                      marginLeft: "10px",
                      "&:hover": {
                        background: "#477EFF",
                      },
                    }}
                  >
                    Log In
                  </CustomBtn>
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
