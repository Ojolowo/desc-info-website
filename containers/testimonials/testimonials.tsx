import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Arrow, Quote } from "assets/svgs";
import { TestimonialsWrapper } from "./testimonials.styles";
import { testimonials } from "./testimonials.utils";

const Testimonials = () => {
   return (
      <TestimonialsWrapper>
         <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={() => null}
            renderArrowNext={(onClick, _nextItemExists, accessibilityLabel) => {
               return (
                  <div className="concealer right" aria-label={accessibilityLabel}>
                     <button className="scroll-button" onClick={onClick}>
                        <Arrow />
                     </button>
                  </div>
               );
            }}
         >
            {testimonials.map(({ id, message, author: { name, description, photo } }) => (
               <div className="testimonial-item" key={id}>
                  <div className="quotation-icon">
                     <Quote />
                  </div>
                  <p className="message">{message}</p>
                  <div className="author-info">
                     <div className="display-photo" style={{ backgroundImage: `url(${photo})` }} />
                     <div>
                        <p className="name">{name}</p>
                        <p className="description">{description}</p>
                     </div>
                  </div>
               </div>
            ))}
         </Carousel>
      </TestimonialsWrapper>
   );
};

export { Testimonials };
