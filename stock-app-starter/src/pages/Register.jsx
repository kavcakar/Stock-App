import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";

import { Form, Link, useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { loginScheme } from "../components/LoginForm";
import Login from "./Login";
import { Formik } from "formik";

const Register = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state.auth);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik
          initialValues={{username:"",
           first_name:"",
           last_name:"",
            email: "",
            password: "" }}
          validationSchema={loginScheme}
          onSubmit={(values, actions) => {
            Login(values)
            actions.resetForm()
            actions.setSubmitting(false)
            
          }}
          // component={(props) => <LoginForm {...props} />}
        >
        {({values,
           handleChange,
           handleBlur,
           errors,
           touched

        }) => (
          <Form>
          <Box sx={{display: "flex" , flexDirection: "column"}}>
          <TextField
          label="User Name"
          name="username"
          id="username"
          type="text"
          variant="outlined"
          value={values?.username || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username }
          
          />
          
          
          <TextField
          label="First Name"
          name="firstname"
          id="firstname"
          type="text"
          variant="outlined"
          value={values?.firstname || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstname && Boolean(errors.firstname)}
          helperText={touched.firstname && errors.firstname }
          
          
          
          />
          <TextField
          label="Last Name"
          name="lastname"
          id="lastname"
          type="text"
          variant="outlined"
          value={values?.lastname || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastname && Boolean(errors.lastname)}
          helperText={touched.lastname && errors.lastname }
          
          
          
          />
          <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values?.email || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email }
          
          
          
          />
        
          <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        
          <LoadingButton type="submit" variant="contained" loading={loading}>
          Submit
          </LoadingButton>
          </Box>
          </Form>
)}
        </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

