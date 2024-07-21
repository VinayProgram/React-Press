import React, { createElement } from "react";
import { useElements } from "../custom-hooks/stateHook";

const SideBar = () => {
  const { elementsArray, setElementsArray } = useElements();
  const [keys, setKeys] = React.useState<{ [key: string]: number }>({
    h1: 0,
  });
  React.useEffect(() => {}, [elementsArray]);

  const addElement = (e: React.MouseEvent<HTMLButtonElement>) => {
    const keyName: string = e.currentTarget.name;
    let newKey = (keys[keyName] += 1);
    setKeys({ ...keys, [keyName]: newKey });
    const uniqueIdentifier=keyName + newKey
    elementCreator(keyName,uniqueIdentifier)
  };

  const elementCreator=(keyName:string,uniqueIdentifier:string)=>{
    
    const n=createElement(keyName,{},'example')
    setElementsArray({
      ...elementsArray,
      [uniqueIdentifier]: n,
    });
  }

  return (
    <aside style={{ height: "100vh" }}>
      <span>
        Add h1
        <button name="h1" onClick={addElement}>
          Add
        </button>
      </span>
    </aside>
  );
};

export default SideBar;
