// Path: open-studio/src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

export default function Sidebar({ open }) {
  return (
    <div className={open ? "sidebar open" : "sidebar"}>
      <h2>Sidebar</h2>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
