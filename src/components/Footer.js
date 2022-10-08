import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo-1.png';
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Fitness is not about being better than someone else, it’s about being better than you used to be.</Typography>
  </Box>
);

export default Footer;