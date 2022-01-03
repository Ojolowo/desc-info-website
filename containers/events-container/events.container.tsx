import React from "react";
import Image from "next/image";
import Star from "assets/images/star.png";
import { EventsWrapper } from "./events-container.styles";

const EventsContainer = () => {
   return (
      <EventsWrapper>
         <div className="newsletter-background">
            <Image src={Star} alt="Star" />
            <h1 className="newsletter-h1">There are no events, Yet!</h1>
            <p className="newsletter-p">Subscribe to stay updated</p>
            <form className="newsletter__button-container">
               <input placeholder="your email" className="newsletter__input-text" type="email" />
               <input className="newsletter__submit-button" type="submit" value="subscribe" />
            </form>
         </div>
      </EventsWrapper>
   );
};

export { EventsContainer };
