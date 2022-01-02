import React from "react";
import { useTheme } from "styled-components";
import { ArrowButton } from "components/arrow-button";
import { TextHeading, TextBrief } from "../../components/typography/index";
import { TeamWrapper, TextsWrapper } from "./team.styles";
import { team } from "./team.utils";

const TeamContainer = () => {
   const theme = useTheme();
   return (
      <TeamWrapper>
         <TextsWrapper>
            <TextHeading size={64} weight={600} className="title-text">
               Full of differences yet, together as one.
            </TextHeading>
            <TextBrief className="sub-heading-sm">
               A team of ten collectively aiming one thing.
            </TextBrief>
         </TextsWrapper>
         <main>
            <div>
               {team.map(({ name, role, profile, connectText, connectLink, image }, index) => (
                  <div className="team-member row" key={`${index}`}>
                     <div className="info column">
                        <h3 className="name">{name}</h3>
                        <p className="role">{role}</p>
                        <p className="profile">{profile}</p>
                        <ArrowButton
                           text={connectText}
                           color={theme.link === "#959595" ? "#000000" : "#FFFFFF"}
                           textStyle={{ fontSize: "14px" }}
                           href={connectLink}
                           target="_blank"
                           onClick={() => {}}
                        />
                     </div>
                     <div className="column image-container">
                        <div className="image" style={{ backgroundImage: `url(${image})` }} />
                     </div>
                  </div>
               ))}
            </div>
         </main>
      </TeamWrapper>
   );
};

export { TeamContainer };
