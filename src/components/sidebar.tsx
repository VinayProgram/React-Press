import { useElements } from "../custom-hooks/stateHook";


const SideBar = () => {
const {setElementDialog}=useElements()
const ElementDialogSetter=(e:React.MouseEvent<HTMLButtonElement>)=>{
  let tagName=e.currentTarget.name
  setElementDialog({
    display:true,
    state:{
      tagName:tagName
    }
  })
}
  return (
    <aside style={{ height: "100vh" }}>
      <span>
        Add h1
        <button name="h1" onClick={ElementDialogSetter}>
          Add
        </button>
        Add h2
        <button name="h2" onClick={ElementDialogSetter}>
          Add
        </button>
      </span>
    </aside>
  );
};

export default SideBar;
