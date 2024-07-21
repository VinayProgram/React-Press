import React from "react";
import ElementAction from "../components/element-action";
import Navigaton from "../components/navigation";
import SideBar from "../components/sidebar";
import CanvasEditor from "./canvas";
import { useElements } from "../custom-hooks/stateHook";

const Editor = () => {
  const {elementDialog}=useElements()
  
  return (
    <React.Fragment>
    <main style={{ display: "flex" }}>
      <main style={{ width: "90%" }}>
        <Navigaton />
        <CanvasEditor />
      </main>
      <SideBar />
    </main>
      <ElementAction/>
      </React.Fragment>
  );
};

export default Editor;
