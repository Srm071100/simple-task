import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
const Header = ({ activeElement }) => {
    return (
        <div className="main-header">
            <div className="header-wrap">
                <div className="header-logo">
                    <img src={logo} width={"100px"}/>
                </div>
                <div className="header-nev-links">
                    <ul>
                        <Link to={"/"}>
                            <li className={activeElement == "home" ? "active" : ""}>Home</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className={activeElement == "about" ? "active" : ""}>About</li>
                        </Link>
                        <Link to={"/like-dislike"}>
                            <li className={activeElement == "like-dislike" ? "active" : ""}>Like-DisLike</li>
                        </Link>
                        <Link to={"/users"}>
                            <li className={activeElement == "users" ? "active" : ""}>Users</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;