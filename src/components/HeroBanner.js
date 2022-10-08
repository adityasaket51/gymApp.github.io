import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import heroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"  mt="30px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={4}>
        Check out the most effective exercises personalized to you
      </Typography>
      <Button variant="contained" color="error" sx={{backgroundColor:'#ff2625', padding:'15px'}}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color="#FF2626" sx={{ opacity: 0.1, display:{lg:'block',xs:'none'} }} fontSize="200px">
        Exercise
      </Typography>
      <img src={heroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
