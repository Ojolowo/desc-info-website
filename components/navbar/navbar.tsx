/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";
import logo2 from "assets/logo-dark.svg";
import logo from "assets/logo-white.svg";
import { Button } from "components/button";
import { NavbarWrapper } from "./navbar.styles";

const Navbar = () => {
   const [isNavActive, setIsNavActive] = useState(false);
   const theme = useTheme();

   return (
      <NavbarWrapper className={`${isNavActive ? "active" : ""}`}>
         {isNavActive && <div className="overlay" onClick={() => setIsNavActive(false)} />}

         <nav className="navbar">
            <Link passHref href="/">
               <div className="logo">
                  {theme.link === "#959595" ? (
                     <Image src={logo2} alt="logo" />
                  ) : (
                     <Image src={logo} alt="logo" />
                  )}
               </div>
            </Link>

            <ul className="large-nav-links">
               <li>
                  <Link href="/team">The Team</Link>
               </li>
               <li>
                  <Link href="/events">Events</Link>
               </li>
               <li>
                  <Link href="/gallery">Gallery</Link>
               </li>
            </ul>

            <Button variant="outline" size="regular" width="202">
               JOIN THE COMMUNITY
            </Button>
         </nav>

         <ul className="mobile-nav-links">
            <li>
               <Link href="/team">The Team</Link>
            </li>
            <li>
               <Link href="/events">Events</Link>
            </li>
            <li>
               <Link href="/gallery">Gallery</Link>
            </li>
         </ul>

         <div className="more-icon">
            <div
               className={`burger ${isNavActive ? "toggled" : ""}`}
               onClick={() => setIsNavActive(!isNavActive)}
            >
               <div className="line line1" />
               <div className="line line2" />
               <div className="line line3" />
            </div>
         </div>
      </NavbarWrapper>
   );
};

export { Navbar };
