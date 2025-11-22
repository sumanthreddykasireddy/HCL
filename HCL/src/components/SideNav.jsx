import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function SideNav({ mobileOpen, onClose }) {
  const drawerWidth = 240;

  const menu = [
    { label: "Dashboard", path: "/" },
    { label: "My Profile", path: "/profile" },
    { label: "Wellness Goals", path: "/wellness" },
    { label: "Messages", path: "/messages" },
  ];

  const drawerContent = (
    <List
      sx={{
        height: "100%",
        overflowY: "auto", // scroll only if content exceeds drawer height
        p: 0,
        mt: 10,
        "& .MuiListItem-root": {
          py: 1.5,
          px: 2,
          borderRadius: 1,
          mx: 0,
          my: 0.5,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
        },
        "& .MuiListItemText-primary": {
          fontSize: "15px",
          fontWeight: 500,
          color: "#fff",
        },
      }}
    >
      {menu.map((item) => (
        <ListItem
          button
          key={item.label}
          component={Link}
          to={item.path}
          onClick={onClose}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#1976d2",
            color: "#fff",
            height: "100vh", // ensure full viewport height
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Mobile Drawer */}
      {/* <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#1976d2",
            color: "#fff",
          },
        }}
      >
        {drawerContent}
      </Drawer> */}
    </>
  );
}
