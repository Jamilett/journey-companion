import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";
import { LogoutProps } from "../interfaces/Login";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header: React.FC<LogoutProps> = ({ onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          JoCo
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={NavLink}
            to="/home"
            color="inherit"
            sx={{
              "&.active": { borderBottom: "2px solid white" },
            }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/activities"
            color="inherit"
            sx={{
              "&.active": { borderBottom: "2px solid white" },
            }}
          >
            Activities
          </Button>
          <Button
            component={NavLink}
            to="/myactivities"
            color="inherit"
            sx={{
              "&.active": { borderBottom: "2px solid white" },
            }}
          >
            My Activities
          </Button>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>

  );
};

export default Header;
