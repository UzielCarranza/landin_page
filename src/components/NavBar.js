import React, {useState} from "react";
import "../styles/navBar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import {IoLogoPlaystation} from "react-icons/io";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="nav">
            <input type="checkbox" id="nav-checkbox" className="nav-checkbox"/>
            <label htmlFor="nav-checkbox" className="toggle">
                <AiOutlineMenu className="menu"/>
                <GrClose className="close" style={{backgroundColor: "#fff"}}/>
            </label>
            <ul className="menu">
                <li>
                    <a href="/">
                        <IoLogoPlaystation className="logo"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoLogoPlaystation/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};