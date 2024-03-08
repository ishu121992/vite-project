import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Footer() {
  // Dynamic copyright year
  const year = new Date();
  const getYear = year.getFullYear();
  return (
    <Box className="footerBox">
      <Typography variant="body2" className="footerContent">
        Copyright © {getYear}  
        <a href="" target="_blank" rel="noreferrer">
          Machine Learning Project 
        </a>
        . All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;