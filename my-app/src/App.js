import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import './index.css';
// import About from './navbar';
// import Login from './containers/Login'
import userss from "./userss.json";
// import userss from "../public/userss.json";
import Footer from "./Footer";
import ComplexGrid from "./ShopItem";
import  {AddItem}  from "./AddItem";
import { Navbarr } from "./Navbarr";
// import { Home } from "./Home";
import axios from "axios";

import { Loggedout } from "./components/Loggedout";
import { stockData } from "./stockData";
import Cart from "./Cart";
import { Orders } from "./Orders";
import { EditItem } from "./EditItem";

function App() {
  // const saved = localStorage.getItem("item");
  // const initial = JSON.parse(saved);
  // if(stockData==initial)
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(stockData));
  }
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user, setuser] = useState(null);

  console.log(user);

  return (
    <div>
      <BrowserRouter>
        <Navbarr user={user} setuser={setuser} />

        <Routes>
          <Route
            index
            path="/"
            element={
              <ComplexGrid {...user} user={{ ...user }} keyWord={"הכול"} />
            }
          />
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
          <Route
            index
            path="/SaltyPastries"
            element={
              <ComplexGrid user={{ ...user }} keyWord={"מאפים מלוחים"} />
            }
          />
          <Route
            index
            path="/cookies"
            element={<ComplexGrid user={{ ...user }} keyWord={"עוגיות"} />}
          />
          <Route index path="/AddItem" element={<div className="App"><AddItem {...user} /></div>} />
          <Route index path="/EditItem" element={<div className="App"><EditItem {...user} /></div>} />
          {/* <Route index path='*' element={<main>נתיב לא נמצא</main>}/>  */}
          <Route
            index
            path="orders"
            element={<Orders {...user} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
