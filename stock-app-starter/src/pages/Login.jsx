import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form } from "formik"
import useAuthCall from "../hooks/useAuthCall"
import LoginForm, { loginScheme } from "../components/LoginForm"
import { useSelector } from "react-redux"
import  TextField  from "@mui/material/TextField"
import { object, string, number, date, InferType } from 'yup';

const Login = () => {
  const navigate = useNavigate()
  const {currentUser, error } = useSelector((state) => state.auth)
  const loginScheme = object({
   
  
    email: string().email().required(),
    password: string().required().min(8)
    .max(20)
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    
  });
  const { login } = useAuthCall()
 
  
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
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
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values)
              actions.resetForm()
              actions.setSubmitting(false)
              
            }}
            component={(props) => <LoginForm {...props} />}
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
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values?.password || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password }
            
            
            
            
            />
            </Box>
            </Form>
  )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login

