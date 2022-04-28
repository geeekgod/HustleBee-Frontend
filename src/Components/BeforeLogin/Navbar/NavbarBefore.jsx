import React, { memo, useState } from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "50%" }}
                src="/static/img/hustlebee.png"
                alt="hustlebee"
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

                <Link to="/signin">
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
                </Link>
                <a href="#categories">
                  <Typography
                    sx={{
                      marginRight: "20px",
                      cursor: "pointer",
                      color: "#616161",
                      fontSize: "1.2rem",
                    }}
                    aria-controls="basic-menu"
                    aria-haspopup="true"
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
                  <Link to="/signup">
                    <CustomBtn
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      Sign Up
                    </CustomBtn>
                  </Link>

                  <Link to="/signin">
                    <CustomBtn
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      Log In
                    </CustomBtn>
                  </Link>
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

export default memo(Navbar);
