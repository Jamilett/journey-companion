import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { LoginFormProps } from "../interfaces/Login";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password); // Call the onSubmit function passed from the parent component (Login.tsx)
  };

  return (
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
      {/* Show error message if there is one */}
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
    </Box>
  )
};

export default LoginForm;
