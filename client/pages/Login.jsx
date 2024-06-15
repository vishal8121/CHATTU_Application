import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';

const Login = () => {


  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(false);


  return (
    <Container component={"main"} maxWidth="sx">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >

        {
          isLogin ? (
            <>
              <Typography variant="h5"> Login</Typography>
              <form>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />

                <Button sx={{
                  marginTop: "1rem",
                }} variant="contained" color="primary" type="submit"
                >
                  Login
                </Button>

                <Typography>Or</Typography>

                <Button sx={{
                  marginTop: "1rem",
                }}
                  variant="contained"
                  color="secondary"
                  onclick={toggleLogin}
                >
                  Sign
                </Button>
              </form>
            </>

          ) : <span>register</span>
        }

      </Paper>

    </Container >
  );
};

export default Login