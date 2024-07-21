import { useElements } from "../custom-hooks/stateHook";


const SideBar = () => {
const {setElementDialog}=useElements()
const ElementDialogSetter=(e:React.MouseEvent<HTMLButtonElement>)=>{
  let tagName=e.currentTarget.id
  console.log(e.currentTarget.name)
  setElementDialog({
    display:e.currentTarget.name,
    state:{
      tagName:tagName
    }
  })
}
  return (
    <aside style={{ height: "100vh" }}>
      <span>
        Add h1
        <button name="text" id="h1" onClick={ElementDialogSetter}>
          Add
        </button>
        Add h2
        <button name="text" id="h2" onClick={ElementDialogSetter}>
          Add
        </button>
        Add Section
        <button name="sec" id='section' onClick={ElementDialogSetter}>
          section
        </button>
      </span>
    </aside>
  );
};

export default SideBar;
