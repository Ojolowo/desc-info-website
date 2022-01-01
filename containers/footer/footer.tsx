import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "assets/images/footer-logo.svg";
import { Facebook, Instagram, Twitter } from "assets/svgs";
import { FooterWrapper, Socials } from "./footer.styles";

const Footer = () => {
   return (
      <FooterWrapper>
         <Image src={Logo} alt="Logo" />
         <Socials>
            <li>
               <Link passHref href="">
                  <Facebook />
               </Link>
            </li>
            <li>
               <Link passHref href="">
                  <Twitter />
               </Link>
            </li>
            <li>
               <Link passHref href="">
                  <Instagram />
               </Link>
            </li>
         </Socials>
      </FooterWrapper>
   );
};

export { Footer };
