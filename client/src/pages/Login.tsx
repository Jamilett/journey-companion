import { Box, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { LoginProps } from "../interfaces/Login";

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (email: string, password: string) => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    } else if (email !== "admin" || password !== "admin") {
      setError("Invalid email or password.");
      return;
    }
    onLogin(); // Call the onLogin function passed from the parent component (App.tsx)
    // navigate("/home");
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
          <LoginForm onSubmit={handleSubmit} error={error} />
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
