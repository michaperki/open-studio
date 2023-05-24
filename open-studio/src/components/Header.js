import React from "react";
import "./Header.css";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Header({ toggleMenu }) {
    const [open, setOpen] = useState(false);
    
    const toggleHamburger = () => {
        toggleMenu();
        setOpen(!open);
    };
    
    return (
        <div className="header">
        <h1>Header</h1>
        <Hamburger open={open} toggleHamburger={toggleHamburger} />
        </div>
    );
}

