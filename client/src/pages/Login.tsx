import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { LoginProps } from "../interfaces/Login";
import { useNavigate } from "react-router-dom";

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    } else if (email !== "admin" || password !== "admin") {
      setError("Invalid email or password.");
      return;
    }
    onLogin();
    navigate("/home");
    setError("");
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={5}
          sx={{
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#333" }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#007bff",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Log In
            </Button>
          </Box>
          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              sx={{ mt: 2 }}
            >
              {error}
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
