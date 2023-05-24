// Path: open-studio/src/pages/Home.js
import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="home">
      <Sidebar open={open} />
      <Header toggleMenu={toggleMenu} />

      <div className="content">
        <h1>Home</h1>
        <p>This app uses React components for the Hamburger menu and sidebar</p>
        <div>
          <h2>Instructions</h2>
          <ol>
            <li>Click the hamburger menu to open the sidebar</li>
            <li>Click the hamburger menu again to close the sidebar</li>
          </ol>

        </div>
      </div>
      <Footer />
    </div>
  );
}
