import React from "react";
import { SubscribeWrapper } from "./subscribe.styles";

const Subscribe = () => {
   return (
      <SubscribeWrapper url="/images/newsletter-bg.png">
         <div className="newsletter-background">
            <h1 className="newsletter-h1">Join our Mailing List</h1>
            <p className="newsletter-p">Don&apos;t miss any new updates from us</p>
            <form className="newsletter__button-container">
               <input placeholder="your email" className="newsletter__input-text" type="email" />
               <input className="newsletter__submit-button" type="submit" value="subscribe" />
            </form>
         </div>
      </SubscribeWrapper>
   );
};

export { Subscribe };
