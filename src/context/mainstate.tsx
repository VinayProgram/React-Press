import React, { Dispatch, SetStateAction } from "react"
export interface ContextList {
  elementsArray: { [key: string]: React.ReactNode };
  setElementsArray: Dispatch<SetStateAction<{ [key: string]: React.ReactNode }>>;
}
export const StateContext=React.createContext<ContextList|null>(null)

export const MainState = ({children}:{children:React.ReactNode}) => {
  const [elementsArray, setElementsArray] = React.useState<{ [key: string]: React.ReactNode }>({});
    return (
    <StateContext.Provider value={{elementsArray,setElementsArray}}>
        {children}
    </StateContext.Provider>
  )
}





