import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333333", 
        color: "white",
        textAlign: "center",
        py: 1, // Reduced vertical padding
        mt: 4,
        px: 2,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "0.875rem" }}>
        © 2025 Rajiv Dwivedi
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
        Connect with me on{" "}
        <Link
          href="https://www.linkedin.com/in/rajiv-dwivedi-4a7099194/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0a66c2", fontWeight: "bold" }}
        >
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
