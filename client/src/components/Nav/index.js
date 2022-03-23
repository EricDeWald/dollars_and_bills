import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Button, Navbar, Container } from 'react-bootstrap'
import './nav.css'
import DbLogo from '../../assets/dollars_and_bills_DT.png'
const userName = Auth.getUsername()

// const haverStyle = {marginLeft: "8px", border: "solid #DF20BA 2px", backgroundColor: "#DF20BA", color:"black" }
// const [hover, setHover] = React.useState({
//   login: false,
//   signup: false
// });
// onmouseenter {( => setHover({...hover, login: true})}
function Nav() {
  const [hoverLogin, setHoverLogin] = React.useState(false)
  const [hoverSignUp, setHoverSignUp] = React.useState(false)
  const [hoverLogOut, setHoverLogOut] = React.useState(false)
  function showNavigation() {
    if (Auth.loggedIn()) {
      console.log(Auth)
      return (
        <Navbar >
          <Container>
            <img className="navImg"
              src={DbLogo}
              width="80px"
              height="80px"
            />
            <Navbar.Brand id="nav-title" href="/">Dollars <span className="navSpan">and</span> Bills
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text id="sign-in" style={{ color: "#DF20BA" }}>
                Signed in as: <a href="#login" id="navIn">{userName}</a>
              </Navbar.Text>
              <Button id="logout-btn" href="/" onClick={() => Auth.logout()} onMouseEnter={() => setHoverLogOut(true)} onMouseLeave={() => setHoverLogOut(false)} style={hoverLogOut ? { border: "solid #DF20BA 2px", backgroundColor: "#DF20BA", color: "black" } : { border: "solid #DF20BA 2px", backgroundColor: "black", color: "#DFA420" }}>
                Logout
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar>
          <Container>
            <img className="navImg"
              src={DbLogo}
              width="80px"
              height="80px"
            />
            <Navbar.Brand style={{ color: "#DFA420", fontSize: "44px", fontWeight: "bold" }} href="/">Dollars <span className="navSpan">and</span> Bills</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Button href="/signup" onMouseEnter={() => setHoverSignUp(true)} onMouseLeave={() => setHoverSignUp(false)} style={hoverSignUp ? { border: "solid #DF20BA 2px", backgroundColor: "#DF20BA", color: "black" } : { border: "solid #DF20BA 2px", backgroundColor: "black", color: "#DFA420" }}>
                Signup
              </Button>
              <Button href="/login" onMouseEnter={() => setHoverLogin(true)} onMouseLeave={() => setHoverLogin(false)} style={hoverLogin ? { marginLeft: "8px", border: "solid #DF20BA 2px", backgroundColor: "#DF20BA", color: "black" } : { marginLeft: "8px", border: "solid #DF20BA 2px", backgroundColor: "black", color: "#DFA420" }}>
                Login
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      {showNavigation()}
    </header>
  );
}

export default Nav;