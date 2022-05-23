import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm";
// import About from './navbar';
// import Login from './containers/Login'
import userss from "./userss.json";
import Footer from "./Footer";
import ComplexGrid from "./ShopItem";

import { Navbarr } from "./Navbarr";
import { Home } from "./Home";
import axios from "axios";
import { Sa } from "./4545454";
import { Loggedout } from "./components/Loggedout";
import { stockData } from "./stockData";
import  Cart  from "./Cart";

function App() {
  // const saved = localStorage.getItem("item");
  // const initial = JSON.parse(saved);
  // if(stockData==initial)
  if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(stockData));}
  // let users=localStorage.getItem("user");
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
  userss.forEach((user) => {
    if (!localStorage.getItem(user.id)) {
      localStorage.setItem(user.id, "[]");
    }
  });
  // users.forEach(user => {
  //   // if(!localStorage.getItem(user.id)){
  //   //   localStorage.setItem(user.id,"[]")
  //   // }
  //   console.log(user)

  // });

  //                console.log(localStorage.getItem("user"))
  //   const Login=detalis=>{

  const [user, setuser] = useState(null);

  console.log(user);

  return (
    <div>
      <BrowserRouter>
        <Navbarr user={user} setuser={setuser} />

        <Routes>
          <Route index path="/" element={<ComplexGrid {...user} />} />
          <Route
            index
            path="LoginForm"
            element={
              <div className="App">
                <LoginForm setuser={setuser} />
              </div>
            }
          />
          <Route
            index
            path="Loggedout"
            element={<Loggedout setuser={setuser} user={user} />}
          />
          <Route index path="/Cart" element={<Cart {...user} />} />
           <Route index path="/cake" element={<ComplexGrid {...user} />} />
        {/* <Route index path='/Services/:name' element={<ServicesDetails/>}/> }
          <Route index path='/' element={<Sa/>}/> }
           <Route index path='*' element={<main>נתיב לא נמצא</main>}/>  */} 
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
