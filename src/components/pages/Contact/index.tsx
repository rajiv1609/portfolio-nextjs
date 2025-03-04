import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
  Grid,
} from "@mui/material";
import Image from "next/image";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { SiNetlify, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  interface FormData {
    user_name: string;
    user_email: string;
    user_phone: string;
    message: string;
  }

  const validateForm = (data: FormData) => {
    const errors: { [key: string]: string } = {};
    if (!data.user_name) errors.user_name = "Name is required.";
    if (!data.user_email || !/\S+@\S+\.\S+/.test(data.user_email))
      errors.user_email = "Valid email is required.";
    if (!data.user_phone || !/^\d{10}$/.test(data.user_phone))
      errors.user_phone = "Phone number must be 10 digits.";
    if (!data.message) errors.message = "Message is required.";
    return errors;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(form.current as HTMLFormElement);
    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      message: formData.get("message") as string,
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    emailjs
      .sendForm(
        "service_m1qpcac",
        "template_zeowsl3",
        form.current!,
        "PEuHw7vCPioIQP8VG"
      )
      .then(
        () => {
          setSuccess(true);
          setErrors({});
          form.current?.reset();
        },
        (error) => console.error(error.text)
      );
  };

  return (
    <Box
      id="contact"
      sx={{ py: 10, px: { xs: 2, md: 10 }, minHeight: "100vh", color: "white" }}
    >
      <Typography variant="h2" fontWeight="bold" textAlign="center" mb={4}>
        Contact Me
      </Typography>
      <Grid container spacing={4}>
        {/* Left Side: Contact Form */}
        <Grid item xs={12} md={6}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              label="Name"
              name="user_name"
              variant="outlined"
              error={!!errors.user_name}
              helperText={errors.user_name}
              sx={{
                mb: 3,
                input: { color: "white" },
                label: { color: "white" },
                border: "1px solid white",
                color: "white",
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              variant="outlined"
              error={!!errors.user_email}
              helperText={errors.user_email}
              sx={{
                mb: 3,
                input: { color: "white" },
                label: { color: "white" },
                border: "1px solid white",
                color: "white",
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="user_phone"
              type="tel"
              variant="outlined"
              error={!!errors.user_phone}
              helperText={errors.user_phone}
              sx={{
                mb: 3,
                input: { color: "white" },
                label: { color: "white" },
                border: "1px solid white",
                color: "white",
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              error={!!errors.message}
              helperText={errors.message}
              sx={{
                mb: 3,
                textarea: { color: "white" },
                label: { color: "white" },
                border: "1px solid white",
                color: "white",
                borderSize: "",
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{
                border: "2px solid white",
                color: "white",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              Send Message
            </Button>
          </form>
          {success && (
            <Alert severity="success" sx={{ mt: 3 }}>
              Thank you for reaching out! I will get back to you soon.
            </Alert>
          )}
        </Grid>

        {/* Right Side: Contact Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: "400px",
            }}
          >
            <Image
              src="/withme.jpg"
              alt="Contact"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section: Social Links */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Connect with me
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Link
            href="tel:+917827633690"
            target="_blank"
            sx={{ color: "#ff5722", fontSize: "2rem" }}
          >
            <FaPhoneAlt /> Phone
          </Link>
          <Link
            href="https://www.instagram.com/therajivdwivedi"
            target="_blank"
            sx={{ color: "#E4405F", fontSize: "2rem" }}
          >
            <FaInstagram /> Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/rajiv-dwivedi-4a7099194/"
            target="_blank"
            sx={{ color: "#0077B5", fontSize: "2rem" }}
          >
            <FaLinkedin /> LinkedIn
          </Link>
          <Link
            href="https://github.com/rajiv1609"
            target="_blank"
            sx={{ color: "#333", fontSize: "2rem" }}
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://app.netlify.com/teams/rajiv1609/sites"
            target="_blank"
            sx={{ color: "#00C7B7", fontSize: "2rem" }}
          >
            <SiNetlify /> Netlify
          </Link>
          <Link
            href="https://leetcode.com/u/rajiv172001/"
            target="_blank"
            sx={{ color: "#FFA116", fontSize: "2rem" }}
          >
            <SiLeetcode /> LeetCode
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
