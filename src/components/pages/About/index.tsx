import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Box
        id="about"
        sx={{
          py: 10,
          px: { xs: 2, md: 10 },
          textAlign: "center", // Center the text horizontally
        }}
      >
        {/* Top Heading */}
        <Typography
          variant="h2"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#f6f4f4" }}
        >
          About Me
        </Typography>

        <Grid container spacing={6} alignItems="center" justifyContent="center"
        >
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 300, md: 400 },
                borderRadius: 2,
                // overflow: "hidden",
                }}
            >
              <Image
                src="/man.jpg"
                alt="About Me"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="medium"
              mb={2}
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Hi, I&apos;m Rajiv Dwivedi
            </Typography>
            <Typography
              variant="h5"
              mb={3}
              lineHeight={1.6}
              sx={{ fontWeight: "bold", color: "white" }}
            >
              I am a passionate developer with expertise in building modern web
              applications.
            </Typography>

            {/* CV Button */}
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1l_aXl6q2S76qxpejZqjK4YwtwtPfjRmL/view?usp=sharing"
              target="_blank"
              sx={{
                mt: 3,
                // backgroundColor: "#007BFF", // Solid blue color
                background: "transparent",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                "&:hover": {
                  background: "gray",
                },
              }}
            >
              View My Resume
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
