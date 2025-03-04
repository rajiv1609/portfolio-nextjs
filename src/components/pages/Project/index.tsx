import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

const project = {
  id: 1,
  title: "My Project",
  description: "A modern Expense Tracker built with Reactjs.",
  image: "/Screenshot.png", // Replace with your image path
  link: "https://vocal-squirrel-e54598.netlify.app/",
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
        <Card
          sx={{
            maxWidth: 600,
            mx: "auto",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
            backgroundColor: "transparent",
          }}
        >
          <CardMedia component="img" height="300" image={project.image} />
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={1}
              sx={{ color: "white" }}
            >
              {project.title}
            </Typography>
            <Typography variant="body1" mb={2} sx={{ color: "white" }}>
              {project.description}
            </Typography>
            <Link
              href={project.link}
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
    </>
  );
};

export default Project;
