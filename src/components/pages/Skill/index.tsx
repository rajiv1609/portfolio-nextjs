import React from "react";
import { Box, Typography, Grid, LinearProgress } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialdesign,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, proficiency: 95 },
  { name: "CSS", icon: <SiCss3 />, proficiency: 90 },
  { name: "JavaScript", icon: <SiJavascript />, proficiency: 85 },
  { name: "Bootstrap", icon: <SiBootstrap />, proficiency: 80 },
  { name: "React.js", icon: <SiReact />, proficiency: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, proficiency: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, proficiency: 75 },
  { name: "Material-UI", icon: <SiMaterialdesign />, proficiency: 85 },
  { name: "TypeScript", icon: <SiTypescript />, proficiency: 85 },
];

const Skill = () => {
  return (
    <>
      <Box
        id="skill"
        sx={{
          py: 8, // Padding top and bottom
          px: { xs: 2, md: 8 }, // Responsive padding left and right
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            color: "#f6f4f4",
          }}
        >
          My Skills
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "800px", // Limit the width of the grid for better readability
            width: "100%", // Ensure the grid takes full width within the maxWidth constraint
          }}
        >
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                    mb: 2,
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "white",
                  }}
                >
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.proficiency}
                  sx={{
                    width: "100%",
                    height: 10,
                    borderRadius: 5,
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      backgroundColor: "primary.main",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "white",
                  }}
                >
                  {skill.proficiency}%
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Skill;
