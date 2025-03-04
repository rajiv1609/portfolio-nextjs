import React from "react";
import Home from "./Home";
import { Item } from "../molecules/MUIGrid";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "../molecules/Footer";

function HomePage() {
  return (
    <Item
      sx={{
        width: "100vw", // Ensures full width
        minHeight: "100vh", // Ensures it fills the screen
        bgcolor: "black", // Background color
        margin: 0,
        padding: 0,
        border: "none",
        boxSizing: "border-box",
      }}
    >
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </Item>
  );
}

export default HomePage;
