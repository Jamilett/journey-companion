import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { LoginFormProps } from "../interfaces/Login";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password); // Llama a la función pasada desde el componente padre
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5001/api/auth/google"; // Redirige al backend para iniciar sesión con Google
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
        Sign In
      </Button>
      <Button
        fullWidth
        variant="outlined"
        onClick={handleGoogleLogin} // Funcionalidad del botón Google
        sx={{
          mt: 1,
          color: "#757575",
          borderColor: "#757575",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        Sign in with Google
      </Button>
      {/* Mostrar mensaje de error si existe */}
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
  );
};

export default LoginForm;
