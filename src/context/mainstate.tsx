import React, { Dispatch, SetStateAction } from "react";
type ElementDialogType=
{ display: string; 
  state: { 
  tagName:string
  [key: string]: string } 
}
export interface ContextList {
  elementsArray: { [key: string]: React.ReactNode };
  setElementsArray: Dispatch<
    SetStateAction<{ [key: string]: React.ReactNode }>
  >;
  elementDialog: ElementDialogType;
  setElementDialog: Dispatch<SetStateAction<ElementDialogType>>;
}
export const StateContext = React.createContext<ContextList | null>(null);

export const MainState = ({ children }: { children: React.ReactNode }) => {
  const [elementsArray, setElementsArray] = React.useState<{
    [key: string]: React.ReactNode;
  }>({});
  const [elementDialog, setElementDialog] = React.useState({
    display: '',
    state: {
      tagName:''
    },
  });
  return (
    <StateContext.Provider
      value={{
        elementsArray,
        setElementsArray,
        elementDialog,
        setElementDialog,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
