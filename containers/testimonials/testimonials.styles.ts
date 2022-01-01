import styled from "styled-components";
import { globalPadding } from "theme/spacing";

export const TestimonialsWrapper = styled.section`
    padding: 50px ${globalPadding};
    overflow: hidden;
    background: ${({ theme }) => theme.testimonials};
    
    .content {
        position: relative;
        max-width: 800px;
    }
    .slider-container {
        overflow: scroll;
        padding-left: 30px;
        
        &::-webkit-scrollbar {
        display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .concealer {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 20%;
        z-index: 10;
        display: flex;
        align-items: center;
        margin-right: -1px;

        .scroll-button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-left: 40%;
        border: none;
        background-color: #3183FF;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 200ms ease;

        @media screen and (min-width: 992px){
            margin-left: 60%;
        }

        &:hover {
            background-color: #1160d8;
            cursor: pointer;
        }
        }
        
        &.left {
        left: 0;
        background-image: linear-gradient(to left, transparent, #090923c7, #090923eb, #090923);

        .scroll-button {
            transform: rotate(180deg);
        }
        }
        
        &.right { 
        right: 0;
        background-image: ${({ theme }) =>
           theme.testimonials !== "#FFFFFF"
              ? "linear-gradient(to right, transparent, #090923c7, #090923eb, #090923);"
              : "none"};
        @media screen and (min-width: 992px){
            width: 700px;
        }
        }

    }


    .testimonial-item {
        padding-right: 20%;
        text-align: left;
        width: 100%;
        color: ${({ theme }) => theme.primaryText};

        &:first-child {
        margin-left: 0;
        }

        .message {
        font-size: 16px;
        margin-top: 20px;
        }
    }

    .quotation-icon {
        width: 50px;
    }

    .author-info {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 20px;

        .display-photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #eee;
        background-position: center;
        background-size: cover;
        }
        .name {
        font-size: 16px;
        font-weight: 600;
        }
        .description {
        font-size: 11px;
        opacity: 0.5;
        }
    }


    @media screen and (min-width: 768px){
    .slider-container {
      padding-left: 6%;
    }



    .testimonial-item {
      .message {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .display-photo {
        width: 50px;
        height: 50px;
      }
      .name {
        font-size: 20px;
      }
      .description {
        font-size: 12px;
      }
    }
    }

    @media screen and (min-width: 992px){
        .slider-container {
        padding-left: 6%;
        }

        .testimonial-item {
        margin-top: 20px;
        margin-bottom: 20px;
        .message {
            font-size: 24px;
            padding-top: 30px;
            padding-bottom: 30px;
        }
        }
    }
    }
`;
