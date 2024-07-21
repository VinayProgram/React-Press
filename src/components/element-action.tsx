import React, { createElement } from "react";
import { useElements } from "../custom-hooks/stateHook";

const ElementAction = () => {
  const {elementDialog, elementsArray, setElementsArray,setElementDialog } = useElements();
  const [keys, setKeys] = React.useState<{ [key: string]: number }>({
    h1: 0,
    h2: 0,
  });
  const {tagName}=elementDialog.state

  const addElement = () => {
    const keyName: string = tagName;
    let newKey = (keys[keyName] += 1);
    setKeys({ ...keys, [keyName]: newKey });
    const uniqueIdentifier = keyName + newKey;
    elementCreator(keyName, uniqueIdentifier);
  };

  const elementCreator = (keyName: string, uniqueIdentifier: string) => {
    const n = createElement(keyName, {}, "example");
    setElementsArray({
      ...elementsArray,
      [uniqueIdentifier]: n,
    });
  };
   const closeElementDialog=()=>{
    setElementDialog({
      display:false,
      state:{
        tagName:''
      }
    })
  }
  return (
    <section
      style={{
        display: elementDialog.display ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0000001a",
        backdropFilter: "blur(4px)",
        position: "absolute",
        top: "0",
        left: "0",
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <div>
        Trying to Create {tagName}
      <button onClick={addElement}>Save</button>
      <button onClick={closeElementDialog}>close</button>
      </div>
    </section>
  );
};

export default ElementAction;
