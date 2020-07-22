import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {AuthContext} from '../Context/auth-context';
import './LoginPage.css';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: 'white !important'
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  
  form: {
    width: '90%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const auth = useContext(AuthContext);

  const classes = useStyles();
  
  const submitHandler = (event) => {
      event.preventDefault();
      auth.login();
  }

  return (
  <div className={classes.root}>
    <Container component="main" className="login" maxWidth="xs" >
      <div className={classes.paper}>
          <img src="../../ml.png" alt="BSPHCL" style={{marginBottom: '40px', backgroundColor:'white', width: '40%', height: '40%'}} />
        <Typography component="h1" variant="h5">
         Machine Learning Project
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userid"
            label="User ID"
            name="userid"
            autoComplete="userid"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  </div>
      
    
  );
}