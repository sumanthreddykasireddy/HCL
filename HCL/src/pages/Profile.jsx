import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Profile = () => {
  const defaultProfile = {
    firstName: "Kali",
    lastName: "Charan",
    email: "kali.charan@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "Anytown",
    height: "5'8\"",
    weight: "70 kg",
    bloodGroup: "O+",
    allergies: "Peanuts",
    medications: "Aspirin",
    conditions: "Asthma",
    emergencyContact: "098-765-4321",
    relation: "Brother",
    contactNumber: "987-654-3210",
  };

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profileData");
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  const handleSave = () => {
    alert("Profile saved successfully!");
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 900, mx: "auto" }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, textAlign: "center", fontWeight: 600 }}
      >
        Prole Details
      </Typography>

      {/* Personal Info */}
      <Accordion
        expanded={expanded === "personal"}
        onChange={handleAccordionChange("personal")}
        sx={{ mb: 2, boxShadow: 3 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Personal Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="First Name"
                value={profile.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Last Name"
                value={profile.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Phone"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Address"
                value={profile.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                value={profile.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Health Info */}
      <Accordion
        expanded={expanded === "health"}
        onChange={handleAccordionChange("health")}
        sx={{ mb: 2, boxShadow: 3 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Health Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Height"
                value={profile.height}
                onChange={(e) => handleChange("height", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Weight"
                value={profile.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Blood Group"
                value={profile.bloodGroup}
                onChange={(e) => handleChange("bloodGroup", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Allergies"
                value={profile.allergies}
                onChange={(e) => handleChange("allergies", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Medications"
                value={profile.medications}
                onChange={(e) => handleChange("medications", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Conditions"
                value={profile.conditions}
                onChange={(e) => handleChange("conditions", e.target.value)}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Other Info */}
      <Accordion
        expanded={expanded === "other"}
        onChange={handleAccordionChange("other")}
        sx={{ mb: 2, boxShadow: 3 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Other Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Emergency Contact"
                value={profile.emergencyContact}
                onChange={(e) =>
                  handleChange("emergencyContact", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Relation"
                value={profile.relation}
                onChange={(e) => handleChange("relation", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Contact Number"
                value={profile.contactNumber}
                onChange={(e) => handleChange("contactNumber", e.target.value)}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSave}
          sx={{ px: 5 }}
        >
          Save Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
