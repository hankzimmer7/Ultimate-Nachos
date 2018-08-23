import React from "react";

const Navbar = props=> (
<nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        {props.message}
      </li>        
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item score-tally">
        Score: {props.score}
      </li>            
      <li className="nav-item score-tally">
        Best: {props.topscore}
      </li>            
    </ul>
</nav>
)

export default Navbar;