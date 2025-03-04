import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Container, Item } from "@/components/molecules/MUIGrid";
import styles from "./styles";

const Home = () => {
  return (
    <Box id="home">
      <Container>
        {/* Text Section */}
        <Item xs={12} md={6} sx={styles.heroLeft}>
          <Typography variant="h2">
            Hello, <br /> I am Rajiv Dwivedi
          </Typography>
          <Typography variant="h6">
            I am a passionate frontend developer specializing in HTML, CSS,
            JavaScript, React.js, and Next.js. I love creating interactive and
            user-friendly websites.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              border: "2px solid white",
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Contact Me
          </Button>
        </Item>

        <Item xs={12} md={6} sx={{paddingTop: "80px", px: { xs: 2, md: 10 },
}}>
          <Item
            sx={{
              img: {
                height: "400px",
                width: "100%",
              },
            }}
          >
            <Image src="/dp3.jpg" alt="about-Me" height={500} width={500} />
          </Item>
        </Item>
      </Container>
    </Box>
  );
};

export default Home;
