import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";
// import SearchPage from './SearchPage'
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";

export const Navbarr = ({ user }) => {
  const [userlogged, setuserlogged] = useState(null)
  const textFromStorage = localStorage.getItem("user");
  const login = localStorage.getItem("user");
  console.log(user);
  console.log(login);
  var retrievedPerson = JSON.parse(localStorage.getItem("user"));
  console.log(retrievedPerson);
  
  useEffect(() => {
    if (user != null) {setuserlogged(user.access)} else{setuserlogged(null)}
    

    return null;
  }, [user]);

  return (
    <>
      <Navbar
        // className="ms-3"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
       style={{background: "#ca7c8aab"}}
      >
        <Navbar.Brand>
          {user != null && (
            <img
              src={user.picture}
              className="img"
              width="40px"
              height="40px"
            />
          )}
        </Navbar.Brand>
        <SearchBar />
        {/* <Navbar.Brand> */}
          {/* {user!=null&&<SearchPage user={user}/>} */}
        {/* </Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse style={{ flexDirection: "column" }}>
          <Nav>
          {userlogged == "admin"&& (
              <Nav.Link eventKey="12" as={Link} to="AddItem"  style={{paddingRight: "3em",
                marginRight: "1em"}} >
                הוסף מוצר
              </Nav.Link>
            )}
            {userlogged == "admin"&& (
              <Nav.Link eventKey="12" as={Link} to="orders"  style={{paddingRight: "3em",
                marginRight: "1em"}} >
                הזמנות
              </Nav.Link>
            )}
            <Nav.Link eventKey="1" as={Link} to="/"  style={{paddingRight: "3em",
                marginRight: "1em"}}>
              בית
            </Nav.Link >
            <NavDropdown title="עוגות" style={{paddingRight: "3em",
                marginRight: "1em"}} >
              <NavDropdown.Item
                eventKey="8"
                as={Link}
                to="products/Birthday"
                style={{ textAlign: "right" }}
              >
                <span> הולדת</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                eventKey="9"
                as={Link}
                to="products/Birthday"
                style={{ textAlign: "right" }}
              >
                עוגות פרווה{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                eventKey="10"
                as={Link}
                to="products/Birthday"
                style={{ textAlign: "right" }}
              >
                עוגות חלביות
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey="2" as={Link} to="cookies"  style={{paddingRight: "3em",
                marginRight: "1em"}}>
              עוגיות
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="products" style={{paddingRight: "3em",
                marginRight: "1em"}} >
              מאפים מתוקים
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="SaltyPastries" style={{paddingRight: "3em",
                marginRight: "1em"}} >
              מאפים מלוחים
            </Nav.Link>
            <Nav.Link eventKey="5" as={Link} to="products" style={{paddingRight: "3em",
                marginRight: "1em"}} >
              אודות
            </Nav.Link>

            {user == null && (
              <Nav.Link eventKey="6" as={Link} to="LoginForm" style={{paddingRight: "3em",
              marginRight: "1em"}} >
                התחברות
              </Nav.Link>
            )}

            {user != null && (
              <Nav.Link eventKey="7" as={Link} to="Loggedout" style={{paddingRight: "3em",
              marginRight: "1em"}} >
                התנתקות
              </Nav.Link>
            )}
            {/* <Navbar.Brand >
          <Nav.Link eventKey="11" as={Link} to='LoginForm'>התחברות</Nav.Link>
          </Navbar.Brand> */}
            {user != null && (
              <Nav.Link eventKey="11" as={Link} to="Cart" style={{paddingRight: "3em",
              marginRight: "1em"}} >
                עגלה
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
};
