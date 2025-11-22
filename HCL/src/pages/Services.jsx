import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Services() {
  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography paragraph>
          We offer a range of services designed to help organizations
          accelerate digital transformation and deliver reliable software
          solutions. Our core services include consulting, custom application
          development, cloud migration, and long-term maintenance and support.
        </Typography>
        <Typography paragraph>
          - Consulting: Strategy, architecture reviews, and delivery planning.
        </Typography>
        <Typography paragraph>
          - Development: Full-stack web and mobile application development
          tailored to your business needs.
        </Typography>
        <Typography paragraph>
          - Cloud & DevOps: Cloud migrations, CI/CD pipelines, and infrastructure
          automation to improve reliability and scalability.
        </Typography>
      </Box>
    </Container>
  );
}

export default Services;
