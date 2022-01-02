import React from "react";
import Image from "next/image";
import galleryImg1 from "assets/images/gallery/img1.png";
import galleryImg10 from "assets/images/gallery/img10.png";
import galleryImg2 from "assets/images/gallery/img2.png";
import galleryImg3 from "assets/images/gallery/img3.png";
import galleryImg4 from "assets/images/gallery/img4.png";
import galleryImg5 from "assets/images/gallery/img5.png";
import galleryImg6 from "assets/images/gallery/img6.png";
import galleryImg7 from "assets/images/gallery/img7.png";
import galleryImg8 from "assets/images/gallery/img8.png";
import galleryImg9 from "assets/images/gallery/img9.png";
import { TextHeading, TextBrief } from "components/typography";
import { GalleryWrapper, GalleryItem, TextsWrapper } from "./gallery.styles";

const featuredImage = [
   { galleryImg: galleryImg1 },
   { galleryImg: galleryImg2 },
   { galleryImg: galleryImg3 },
   { galleryImg: galleryImg4 },
   { galleryImg: galleryImg5 },
   { galleryImg: galleryImg6 },
   { galleryImg: galleryImg7 },
   { galleryImg: galleryImg8 },
   { galleryImg: galleryImg9 },
   { galleryImg: galleryImg10 },
];

const GalleryContainer = () => {
   return (
      <GalleryWrapper>
         <TextsWrapper>
            <TextHeading size={64} weight={600} className="title-text">
               Memories mean so much to us
            </TextHeading>
            <TextBrief className="sub-heading-sm">Moments captured from various events.</TextBrief>
         </TextsWrapper>

         <GalleryItem>
            {featuredImage.map(({ galleryImg }, index) => (
               <Image
                  className="gallery-img"
                  src={galleryImg}
                  alt={`Desc gallery image ${index}`}
                  key={index.toString()}
               />
            ))}
         </GalleryItem>
      </GalleryWrapper>
   );
};

export { GalleryContainer };
