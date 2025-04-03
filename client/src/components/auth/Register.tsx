import React, { useState } from "react"; import { useNavigate } from "react-router-dom"; import { useAuth } from "../../context/AuthContext"; import { TextField, Button, Container, Typography, Box } from "@mui/material"; const Register = () => { const [formData, setFormData] = useState({ email: "", password: "", firstName: "", lastName: "", company: "" }); const [error, setError] = useState(""); const { register } = useAuth(); const navigate = useNavigate(); const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); }; const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); try { await register(formData); navigate("/dashboard"); } catch (err) { setError("Registration failed. Please try again."); } }; return ( <Container maxWidth="sm"> <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}> <Typography component="h1" variant="h5"> Register </Typography> <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}> <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={formData.email} onChange={handleChange} /> <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" value={formData.password} onChange={handleChange} /> <TextField margin="normal" required fullWidth name="firstName" label="First Name" id="firstName" value={formData.firstName} onChange={handleChange} /> <TextField margin="normal" required fullWidth name="lastName" label="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} /> <TextField margin="normal" required fullWidth name="company" label="Company" id="company" value={formData.company} onChange={handleChange} /> {error && ( <Typography color="error" sx={{ mt: 2 }}> {error} </Typography> )} <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Register </Button> </Box> </Box> </Container> ); }; export default Register;
