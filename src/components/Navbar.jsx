import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  let [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled((prevToggled) => !prevToggled);
  }

  const navbarVariants = {
    open: {
      height: "fit-content",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.4,
      },
    },
    close: {
      height: "0px",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.4,
      },
    },
  };

  const navbarController = useAnimationControls();

  useEffect(() => {
    if (toggled) {
      navbarController.start("open");
    } else {
      navbarController.start("close");
    }
  }, [toggled]);

  return (
    <>
      <div
        className="navbar flex justify-between items-center px-9 py-7"
        id="nav"
      >
        <div className="navbar-brand">
          <h1 className="text-white text-2xl underline underline-offset-4">
            /dev/ss.
          </h1>
        </div>
        <motion.ul
          className={`flex gap-8`}
          variants={navbarVariants}
          animate={navbarController}
          initial="close"
        >
          <li>
            <a href="#" className="text-slate-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-slate-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a
              href="mailto:shivsatyam86@gmail.com"
              className="text-slate-300 hover:text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-300 hover:text-white">
              Projects
            </a>
          </li>
        </motion.ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Navbar;
