"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skill", id: "skill" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <Box>
      {/* Fixed AppBar */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#333333", boxShadow: "none", }}
      >
        <Toolbar>
          {/* Logo and Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              cursor: "pointer",
              color: "#f2d4e1",
            }}
          >
            ｐｏｒｔｆｏｌｉｏ
          </Typography>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: "none", md: "flex" }, fontWeight: "bold" }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{ margin: "0 10px" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer to push content below the fixed AppBar */}
      <Toolbar />

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                toggleDrawer(false);
              }}
              sx={{ cursor: "pointer", fontWeight: "bold" }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
