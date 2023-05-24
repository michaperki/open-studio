import React from "react";
import "./Hamburger.css";

export default function Hamburger({ open, toggleHamburger }) {
    return (
        <div className="hamburger" onClick={toggleHamburger}>
        <div className={open ? "line line-1 open" : "line line-1"}></div>
        <div className={open ? "line line-2 open" : "line line-2"}></div>
        <div className={open ? "line line-3 open" : "line line-3"}></div>
        </div>
    );
}
