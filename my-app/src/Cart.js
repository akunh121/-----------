import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Cart(user) {
  const navigate = useNavigate();
  let cart = JSON.parse(localStorage.getItem(user.id));
  
    useEffect(() => {
      if(cart==null)
        navigate("/LoginForm");
      return null
    }, [cart]);
  
  
  console.log(cart)
  return (
    <div>
     {cart!=null&&<div className="content" >
      {cart.map((Data, key) => (
    <Paper
    variant="primary"
    key={key}
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 900,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}  >
        <Grid item> 
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={Data.picture} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {Data.type}
              </Typography>
              {/* <Typography variant="body2" gutterBottom>
                {Data.type}
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {Data.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    ))}
    </div>
}
    </div>
  );
}
