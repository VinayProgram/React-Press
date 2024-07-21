import Navigaton from "../components/navigation";
import SideBar from "../components/sidebar";
import CanvasEditor from "./canvas";

const Editor = () => {
  return (
    <main style={{ display: "flex" }}>
      <main style={{ width: "90%" }}>
        <Navigaton />
        <CanvasEditor />
      </main>
      <SideBar />
    </main>
  );
};

export default Editor;
