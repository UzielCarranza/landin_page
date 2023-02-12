import React from "react";
import "../styles/navBar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {IoLogoPlaystation} from "react-icons/io";
import {CgClose} from "react-icons/cg";

const NavItem = ({url, pageName}) => {
    return (
        <li>
            <a href={url}>
                {pageName}
            </a>
        </li>
    )
}

export const NavBar = () => {
    return (
        <nav className="nav">
            <input type="checkbox" id="nav-checkbox" className="nav-checkbox"/>
            <label htmlFor="nav-checkbox" className="toggle">
                <AiOutlineMenu className="menu img-toggle"/>
                <CgClose style={{color: '#fff'}} className="close img-toggle"/>
            </label>
            <ul className="menu">
                <NavItem url={"/"} pageName={<IoLogoPlaystation className="logo"/>}/>
                <NavItem url={"/"} pageName={"Home"}/>
                <NavItem url={"/about"} pageName={"About"}/>
                <NavItem url={"/contact"} pageName={"Contact"}/>
            </ul>
        </nav>
    );
};