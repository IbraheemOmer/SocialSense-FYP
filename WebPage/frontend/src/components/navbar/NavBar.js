import Nav from "../nav/Nav";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navigation">
      <NavLink to="/">
        <img
          src="assets/images/logo 3.png"
          alt="SocialSense"
          className="small-logo"
        />
      </NavLink>
      <Nav />
    </div>
  );
}
