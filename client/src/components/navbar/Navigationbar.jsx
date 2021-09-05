import React from "react";
import "./navigationbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./navbar.css"
import { Navbar, Container, Nav } from "react-bootstrap";
import { Chat, Person, Search, Notifications } from "@material-ui/icons";
import StateContext from "../../Context/Context";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Navigationbar() {
  const history = useHistory();
  const { post } = useContext(StateContext);

  return (
    <div>
      {/* <Navbar bg="primary" variant="dark" sticky='top'> */}
      {/* <Navbar.Brand href="#home">Social</Navbar.Brand> */}
      <div className="navbarContainer">
        <div className="navbarLeft">
          <span className="logo" onClick={() => history.push("/Home")}>
            Socialbook
          </span>
        </div>
        <div className="navbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search for post" className="searchInput" />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <Person />
              <span className="navbarIconBadge">1</span>
            </div>
            <div className="navbarIconItem">
              <Chat />
              <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItem">
              <Notifications />
              <span className="navbarIconBadge">{post.length}</span>
            </div>
          </div>
          <div className="navbarLinks">
            <span className="navbarLink" onClick={() => history.push("/Home")}>
              Home
            </span>
            <span className="navbarLink" onClick={() => history.push("/Login")}>
              Logout
            </span>
          </div>
          <img
            src="/images/2.png"
            alt=""
            className="navbarImg"
            onClick={() => history.push("/Profile/:Username")}
          />
        </div>
        {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </div>
      {/* </Navbar> */}
    </div>
  );
}
