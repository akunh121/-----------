import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { stockData } from "./stockData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  padding: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

// export default function ComplexGrid({...user},cookies) {
export default function ComplexGrid(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.keyWord]);
  console.log(props.user);
  console.log(props.keyWord);
  let products = JSON.parse(localStorage.getItem("products"));
  // let cart=JSON.parse(localStorage.getItem("cart"))
  function addItem(productId) {
    let cart = JSON.parse(localStorage.getItem(props.user.id));
    alert("הוסף בהצלחה");

    let product = products.find(function(product) {
      return product.id == productId;
    });
    if (cart.length == 0) {
      console.log(product);
      cart.push(product);
      console.log(product);
    } else {
      // let z = cart.concat(product);
      // console.log(z)
      // localStorage.setItem("cart",JSON.stringify(z))
      console.log(cart);
      let res = cart.find((element) => element.id == productId);
      console.log(product);
      if (res == undefined) {
        console.log(product);
        cart.push(product);
        console.log(cart);
      }
    }
    // if(localStorage.getItem("cart")){
    localStorage.setItem(props.user.id, JSON.stringify(cart));
    // }
    console.log(cart);
  }
  function removeItem(productId) {
    let cart = JSON.parse(localStorage.getItem(props.user.id));
    alert("הוסר בהצלחה");

    // console.log(productId)

    // console.log(productId)
    // console.log(cart)

    console.log(cart);

    // let temp = cart.filter(item=>{console.log(item.id+productId)});
    // console.log(temp)
    let temp = cart.filter((item) => item.id != productId);
    console.log(temp);
    localStorage.setItem(props.user.id, JSON.stringify(temp));
    console.log(cart);
  }
  // console.log(keyWord)
  const navigate = useNavigate();
  function LoginForm() {
    navigate("/products/Birthday");
  }

  return (
    <>
      <div className="content">
        <Grid container spacing={1} className="justify-content-center">
          {products.map((Data, key) => (
            <div key={key}>
              {(Data.type == props.keyWord || props.keyWord == "הכול") && (
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    m: 1,
                    maxWidth: 500,
                    flexGrow: 1,

                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  }}
                >
                  {/* {Data.type==={keyWord}&&<> */}
                  <Grid item className="justify-content-md-center">
                    <ButtonBase sx={{ width: 350, height: 350 }}>
                      <Img
                        alt="complex"
                        src={Data.picture}
                        onClick={LoginForm}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={3}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {/* {Data.name} */}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        {Data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                          <Button
                            className="button-block mb-1"
                            variant="contained"
                            color="success"
                            // onClick={user!=null?() => addItem(key):  navigate("/LoginForm")}
                            onClick={
                              JSON.stringify(props.user) === JSON.stringify({})
                                ? () => navigate("/LoginForm")
                                : () => addItem(key)
                            }
                            name={key}
                          >
                            הוסף לסל
                          </Button>
                        </Typography>
                        {JSON.stringify(props.user) != JSON.stringify({}) && (
                          <Typography
                            sx={{ cursor: "pointer" }}
                            variant="body2"
                          >
                            <Button
                              className="button-block"
                              variant="contained"
                              color="success"
                              onClick={() => removeItem(key)}
                              name={key}
                            >
                              הסר
                            </Button>
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        margin={0}
                      >
                        {Data.price}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* </>} */}
                </Paper>
              )}
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
}
