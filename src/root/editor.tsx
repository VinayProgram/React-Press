import React from "react";
import ElementAction from "../components/element-action-texts";
import Navigaton from "../components/navigation";
import SideBar from "../components/sidebar";
import CanvasEditor from "./canvas";
import ElementSection from "../components/element-section";

const Editor = () => {  
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
      <ElementSection/>
      </React.Fragment>
  );
};

export default Editor;
