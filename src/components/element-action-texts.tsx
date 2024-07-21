import React, { CSSProperties, HtmlHTMLAttributes, createElement } from "react";
import { useElements } from "../custom-hooks/stateHook";

const ElementAction = () => {
  const {elementDialog, elementsArray, setElementsArray,setElementDialog } = useElements();
  const [keys, setKeys] = React.useState<{ [key: string]: number }>({
    h1: 0,
    h2: 0,
  });
  const {tagName}=elementDialog.state
  const [elementAttributes,setElementAttributes]=React.useState({
    text:'example'
  })
  const [elementStyleAttributes,setElementStyleAttributes]=React.useState<CSSProperties>({})
  const addElement = () => {
    const keyName: string = tagName;
    let newKey = (keys[keyName] += 1);
    setKeys({ ...keys, [keyName]: newKey });
    const uniqueIdentifier = keyName + newKey;
    elementCreator(keyName, uniqueIdentifier);
  };

  const elementCreator = (keyName: string, uniqueIdentifier: string) => {
    console.log(elementStyleAttributes)
    const n = createElement(keyName, {style:{...elementStyleAttributes}}, elementAttributes.text);
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
  const handleElementAtributes=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setElementAttributes({...elementAttributes,[e.currentTarget.name]:e.currentTarget.value})
  }
  const handleCss=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setElementStyleAttributes({...elementStyleAttributes,[e.currentTarget.name]:e.currentTarget.value})
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
      type Text
      <input  name="text" onChange={handleElementAtributes} />
      choose Color      
      <input type="color" name='color'  onChange={(e)=>setElementStyleAttributes({...elementStyleAttributes,[e.currentTarget.name]:e.currentTarget.value})} />
      chooseBackgroundColor
      <input type="color" name={'backgroundColor'}  onChange={handleCss}/>
      choose position
      <input type="text" name={'position'}  onChange={handleCss} />
      <button onClick={addElement}>Save</button>
      <button onClick={closeElementDialog}>close</button>
      </div>
    </section>
  );
};

export default ElementAction;
