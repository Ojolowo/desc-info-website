import React from "react";
import { Button } from "components/button";
import { ConnectWrapper } from "./connect.styles";

const Connect = () => {
   return (
      <ConnectWrapper url="/images/connect-banner.jpg">
         <h1 className="title">Connect, Learn and Grow</h1>
         <p className="sub-text">A reason enough to be in a community</p>
         <Button variant="primary" size="regular" style={{ marginTop: "2em" }}>
            JOIN THE COMMUNITY
         </Button>
      </ConnectWrapper>
   );
};

export { Connect };
