import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import userIcon from "../assets/user-icon.png"; 

export default function Header({ onMenuClick }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#1976d2",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: 64,
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Healthcare Portal
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            John Doe
          </Typography>
          <Avatar src={userIcon} alt="user" sx={{ width: 36, height: 36 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
