import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactUs() {
  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible. For immediate inquiries, you can reach our support
          team at <strong>support@example.com</strong>.
        </Typography>

        <Box component="form" sx={{ display: 'grid', gap: 2, maxWidth: 600 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
          <Button variant="contained">Send Message</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactUs;
