import React,{useState, useEffect} from "react"

const useTitle = (initialValue) =>{
  const [value, setValue] = useState(initialValue)
  const updateTitle = () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = value
  }
  useEffect(updateTitle,[value]);
  return setValue
}


function App()   {
  const titleUpdate = useTitle("Looding")
  setTimeout(() => {
    titleUpdate("HOME")
  }, 1000);
  return (
    <>
      <div>
        <h1>hi</h1>
        
      </div>
      
    </>
  );
}

export default App;
