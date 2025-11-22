import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AboutUs() {
  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography paragraph>
          We are a dedicated team of engineers and designers committed to
          building high-quality software that solves real business problems.
          Our mission is to partner with clients to deliver scalable,
          maintainable solutions and to continuously improve through feedback
          and iteration.
        </Typography>
        <Typography paragraph>
          Founded on principles of collaboration and transparency, we value
          clear communication and measurable outcomes. We work across
          industries to bring practical, modern technology solutions to life.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUs;
