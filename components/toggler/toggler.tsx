import React from "react";

const Toggler = ({ changeTheme }) => {
   return (
      <div className="toggler">
         <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={changeTheme} />
         <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
         </label>
      </div>
   );
};

export { Toggler };
