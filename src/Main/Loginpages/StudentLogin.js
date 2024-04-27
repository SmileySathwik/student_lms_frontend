// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import  config from '../../config'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function StudentLogin({onStudentLogin}) {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/api/v1/student/checklogin`,
        formdata
      );
      if (response.data != null) {
        onStudentLogin();
        localStorage.setItem('student',JSON.stringify(response.data));
        console.log("Login successfull!!");
        toast.success("Login Successfull")
        // navigate("/home");
      } else {
        setMessage("Login Falied");
        setError("");
      }
    } catch (error) {
      console.log(formdata.email, formdata.password);
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div>
      <h3 align="center">
        <u>Student Login</u>
      </h3>
      {message ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center">{error}</h4>
      )}
      <form className="form-container" onSubmit={handleSubmit}>
          <label>Enter Username</label>
          <input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
          <label>Enter Password</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            required
          />
          <input type="submit" />
      </form>
    </div>

    // <Container component="main" maxWidth="xs">
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //       />
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //       />
    //       <FormControlLabel
    //         control={<Checkbox value="remember" color="primary" />}
    //         label="Remember me"
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //       >
    //         Sign In
    //       </Button>
    //       <Grid container>
    //         <Grid item xs>
    //           <Link href="#" variant="body2">
    //             Forgot password?
    //           </Link>
    //         </Grid>
    //         <Grid item>
    //           <Link href="#" variant="body2">
    //             {"Don't have an account? Sign Up"}
    //           </Link>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Container>
  );
}
