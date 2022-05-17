import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LoginForm from './components/LoginForm'
import { Link } from 'react-router-dom'
// import SearchPage from './SearchPage'


import React from 'react'

export const Navbarr = ({ user }) => {
  const textFromStorage = localStorage.getItem('user');
  const login= (localStorage.getItem("user"))
  console.log(user)
  console.log(login)
  var retrievedPerson = JSON.parse(localStorage.getItem("user"))
  console.log(retrievedPerson);
  return (
  
        
    <Navbar bg="danger" variant="dark" sticky='top' expand="lg" collapseOnSelect    > 
    
          

        <Navbar.Brand >
          {user!=null&&<img src={user.picture} className='img' width="40px" height="40px"/>}
            
        </Navbar.Brand>
        <Navbar.Brand >
        {/* {user!=null&&<SearchPage user={user}/>} */}
    </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{flexDirection: "column"}} >
        <Nav  >
        <Nav.Link eventKey="1" as={Link} to="/">בית</Nav.Link>
          <NavDropdown title='עוגות' align="end" >
            <NavDropdown.Item eventKey="8" as={Link} to='products/Birthday' style={{textAlign: 'right'}} ><span > הולדת</span></NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item eventKey="9" as={Link} to='products/Birthday'style={{textAlign: 'right'}} >עוגות פרווה </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item eventKey="10" as={Link} to='products/Birthday'style={{textAlign: 'right'}} >עוגות חלביות</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="2" as={Link} to='products'>עוגיות</Nav.Link>
          <Nav.Link eventKey="3" as={Link} to='products'>מאפים מתוקים</Nav.Link>
          <Nav.Link eventKey="4" as={Link} to='products'>מאפים מלוחים</Nav.Link>
          <Nav.Link eventKey="5" as={Link} to='products'>אודות</Nav.Link>
          
          {user==null&&<Nav.Link  eventKey="6" as={Link} to='LoginForm'   >התחברות</Nav.Link>}
          
          {user!=null&&<Nav.Link  eventKey="7" as={Link} to='Loggedout'>התנתקות</Nav.Link>}
          {/* <Navbar.Brand >
          <Nav.Link eventKey="11" as={Link} to='LoginForm'>התחברות</Nav.Link>
          </Navbar.Brand> */}
            {user!=null&&<Nav.Link eventKey="11" as={Link} to='Cart'>עגלה</Nav.Link>}

          
        </Nav>
        
          
        
        
        </Navbar.Collapse>
        

        
    </Navbar>
    
    
  )
}
