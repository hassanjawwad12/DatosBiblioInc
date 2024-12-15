import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Email = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("your_service_id", "your_template_id", formData, "your_public_key")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
          handleClose();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="send-email">
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" mb={2}>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mr: 1 }}
            >
              Send
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Email;
