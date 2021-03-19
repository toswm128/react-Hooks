import React,{useState, useEffect , useRef} from "react"

const useClick = onClick =>{
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("click", onClick)
    }
    return ()=>{
      if(element.current){
        element.current.removeEventListener("click", onClick)
      }
    };
  },[]);
  return element;

}


function App()   {

  const hello = () => console.log("hi")

  const title = useClick(hello)
  const button = useClick(hello)

  return (
    <>
      <div>
        <h1 ref={title}>hi</h1>
        <button ref={button}>g</button>
      </div>
      
    </>
  );
}

export default App;
