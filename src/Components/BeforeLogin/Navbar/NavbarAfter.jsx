import React, { memo, useState, useContext } from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CustomBtn from "../Main/CustomBtn";
import { AuthContext } from "../../../context/AuthContext";
import { DataContext } from "../../../context/DataContext";
import AfterDrawer from "./AfterDrawer";
import { Link } from "react-router-dom";

const Navbar = ({ matches }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const openMenu = Boolean(anchorEl);
  const { authSignOut } = useContext(AuthContext);
  const { profile } = useContext(DataContext);
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
              <AfterDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Link to="/">
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
                </Link>

                <Link to="/jobs">
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
                {profile.role === "Candidate" ? (
                  <Link to="/jobs/applied">
                    <Typography
                      sx={{
                        marginRight: "20px",
                        cursor: "pointer",
                        color: "#616161",
                        fontSize: "1.2rem",
                      }}
                    >
                      My Applied Jobs
                    </Typography>
                  </Link>
                ) : (
                  <Link to="/jobs/posted">
                    <Typography
                      sx={{
                        marginRight: "20px",
                        cursor: "pointer",
                        color: "#616161",
                        fontSize: "1.2rem",
                      }}
                    >
                      My Posted Jobs
                    </Typography>
                  </Link>
                )}
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
                  {profile?.role === "Employer" ? (
                    <Link to="/jobs/post">
                      <CustomBtn
                        sx={{
                          marginLeft: "10px",
                        }}
                      >
                        Post Jobs
                      </CustomBtn>
                    </Link>
                  ) : null}
                  <CustomBtn
                    onClick={() => authSignOut()}
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    Sign Out
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

export default memo(Navbar);
