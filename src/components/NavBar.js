import React, {useState} from "react";
import "../styles/navBar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {IoLogoPlaystation} from "react-icons/io";
import {CgClose} from "react-icons/cg";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="nav">
            <input type="checkbox" id="nav-checkbox" className="nav-checkbox"/>
            <label htmlFor="nav-checkbox" className="toggle">
                <AiOutlineMenu className="menu img-toggle"/>
                <CgClose style={{color: '#fff'}} className="close img-toggle"/>
            </label>
            <ul className="menu">
                <li>
                    <a href="/">
                        <IoLogoPlaystation className="logo"/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        home
                    </a>
                </li>
                <li>
                    <a href="/about">
                        About
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};