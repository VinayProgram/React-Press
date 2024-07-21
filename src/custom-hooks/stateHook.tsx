import React from "react";
import { StateContext } from "../context/mainstate";

export const useElements = () => {
  const currentUserContext = React.useContext(StateContext);
    
  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};