import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

const project1 = {
  id: 1,
  title: "My Project",
  description: "A modern Expense Tracker built with Reactjs.",
  image: "/Screenshot1.png", // Replace with your image path
  link: "https://vocal-squirrel-e54598.netlify.app/",
};
const project2 = {
  id: 2,
  title: "My Project",
  description: "A modern Multi User Chat Room built with Next js and Socket io",
  image: "/Screenshot 2.png", // Replace with your image path
  link: "https://chat-app-rajiv.netlify.app/",
};
const Project = () => {
  return (
    <>
      <Box id="projects" py={8} px={{ xs: 2, md: 8 }} textAlign="center">
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#f6f4f4" }}
        >
          My Project
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 600,
              mx: "auto",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              backgroundColor: "transparent",
            }}
          >
            <CardMedia component="img" height="300" image={project1.image} />
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={1}
                sx={{ color: "white" }}
              >
                {project1.title}
              </Typography>
              <Typography variant="body1" mb={2} sx={{ color: "white" }}>
                {project1.description}
              </Typography>
              <Link
                href={project1.link}
                target="_blank"
                rel="noopener"
                color="primary"
                underline="hover"
                sx={{ fontWeight: "bold" }}
              >
                View Project
              </Link>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 600,
              mx: "auto",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              backgroundColor: "transparent",
            }}
          >
            <CardMedia component="img" height="300" image={project2.image} />
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={1}
                sx={{ color: "white" }}
              >
                {project2.title}
              </Typography>
              <Typography variant="body1" mb={2} sx={{ color: "white" }}>
                {project2.description}
              </Typography>
              <Link
                href={project2.link}
                target="_blank"
                rel="noopener"
                color="primary"
                underline="hover"
                sx={{ fontWeight: "bold" }}
              >
                View Project
              </Link>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Project;
