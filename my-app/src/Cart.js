import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { QuantityPicker } from "react-qty-picker";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Cart(user) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  function Quanityfun(num, key) {
    let cart = JSON.parse(localStorage.getItem(user.id));
    cart = cart.map((value) => {
      if (cart[key] === value) {
        console.log("aaa");
        return {
          ...value,
          Quanity: num,
        };
      }
      return value;
    });
    localStorage.setItem(user.id, JSON.stringify(cart));
    setCartstate(cart);
  }
  const [Cartstate, setCartstate] = useState(
    JSON.parse(localStorage.getItem(user.id))
  );
  function removeItem(productId) {
    let cart = JSON.parse(localStorage.getItem(user.id));
    alert("הוסר בהצלחה");
    console.log(productId);

    // console.log(productId)

    // console.log(productId)
    // console.log(cart)

    console.log(cart);
    // let temp = cart.filter(item=>{console.log(item.id+productId)});
    // console.log(temp)
    let temp = cart.filter((item) => item.id !== productId);
    console.log(temp);
    localStorage.setItem(user.id, JSON.stringify(temp));
    setCartstate(temp);
    console.log(Cartstate);
    console.log(cart);
  }
  const navigate = useNavigate();
  let cart = JSON.parse(localStorage.getItem(user.id));

  useEffect(() => {
    if (cart == null) navigate("/LoginForm");
    return null;
  }, [cart]);

  console.log(cart);
  return (
    <div >
      {cart.length !== 0 ? 
        <div className="content">
          {cart.map((Data, key) => (
            <Paper
              variant="primary"
              key={key}
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 700,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={Data.picture} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {Data.type}
                      </Typography>
                      {/* <Typography variant="body2" gutterBottom>
                {Data.type}
              </Typography> */}
                      <Typography variant="body2" color="text.secondary">
                        
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        <Button onClick={() => removeItem(Data.id)} name={key}>
                          הסר מהעגלה
                        </Button>
                      </Typography>
                      <QuantityPicker
                        value={Data.Quanity}
                        min={1}
                        onChange={(value) => {
                          Quanityfun(value, key);
                        }}
                      />
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
      :<div><Img src="https://top-studio.co.il/wp-content/uploads/2022/01/%D7%A2%D7%92%D7%9C%D7%94-%D7%A8%D7%99%D7%A7%D7%94.png"  /></div>}
       
    </div>
  );
}
