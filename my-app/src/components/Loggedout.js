import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

export const Loggedout = ({ setuser }) => {
  localStorage.removeItem("user");
  // const refreshPage=()=>{
  //     window.location.reload(false);
  //   }
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/LoginForm");
      setuser(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  // window.onload = function() {
  //     if(!window.location.hash) {
  //         window.location = window.location + '#loaded';
  //         window.location.reload();
  //     }
  // }

  return <div>loggedout</div>;
};
