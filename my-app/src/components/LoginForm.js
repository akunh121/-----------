import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import userss from './userss.json'
import { useHistory } from "react-router";
import { useEffect } from "react";

function LoginForm({ setuser,user }) {
  const [error, seterror] = useState('');
  const [logged, setlogin] = useState(false);
  const [Try, setTry] = useState(false)

  const navigate = useNavigate();
  const submitHandler = (e) => {
  
    e.preventDefault();
    console.log(e);
    const userEmail = e.target[0].value;
    console.log(userEmail);
    const userPassword = e.target[1].value;
    console.log(userPassword);
    axios
      .get("../userss.json")
      .then((res) => {
        res.data.forEach((user) => {
          console.log(user);
          if (user.email === userEmail && user.password === userPassword) {
            console.log("logged in");
            setlogin(true)
            
            setuser(user);

            localStorage.setItem("user", JSON.stringify(user));
            console.log(localStorage.getItem("user"));
           
            navigate("/");
            //  history.go(0)
            //  refreshPage()
          }
          
        }
    
        );
        setTry(true)
      }
      
      )
      .catch((err) => {
        console.log(err);
       
        
      }
             

      );
     
      
      };
     
      useEffect(() => {
        if(Try==true){
          seterror('פרטים שגויים')
        }
        return () => {
          if(Try==false){
          seterror('');
          }
          setTry(false) // This worked for me
        };
    }, [Try]);
      
      
     

  return (
    <form onSubmit={submitHandler}>
      <div className="form-innerr">
        <h2>התחברות</h2>
        {/* {(error!="")?(<div className="error">{error}</div>):""} */}
        <div className="form-group">
          {error!=''&&<div>{error}</div>}
          {/* <label htmlFor="name">Name</label>
             <input type="text" name="name" id="name" onChange={e=>setDetalis({...detalis,name:e.target.value})} value={detalis.name} /> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">אימייל</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">סיסמא</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="login" />
      </div>
    </form>
  );
}

export default LoginForm;
