import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShopItem from "./ShopItem"
import { useState } from "react";
import userss from "./userss.json";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Orders = (login) => {
    const navigate = useNavigate();
  useEffect(() => {
    if (login.access != "admin") navigate("/");
    return null;
  }, []);
    const [user, setuser] = useState(userss[0]);
    const Click = (name) => {
    console.log(userss[name])
    
    // let cart = JSON.parse(localStorage.getItem(name));
    setuser(userss[name])

}

  return (
    <div>
        
        <Stack spacing={3} direction="row"  justifyContent="center">
        {userss.map((Data, key)=>
      <Button variant="contained" key={key}  onClick={()=>Click(Data.id-1)}  style={{marginLeft: "24px"}}>{Data.name}</Button>
    //   {/* <Button variant="contained">2</Button>
    //   <Button variant="contained">3</Button>
    //   <Button variant="contained">4</Button>
    //   <Button variant="contained">5</Button> */}
      )}
    </Stack>

    <Cart {...user} />
    </div>
  )
}


