import React,{useState} from "react"


const useInput = (initialValue) =>{
  const [value, setValue] = useState(initialValue)
  const onChange = (e) =>{
    console.log(e.target)
  }
  return { value, onChange }
}

function App()   {
  const name = useInput("Mr.")
  return (
    <>
      <div>
        <h1>hi</h1>
        <input type="text" placeholder="Name" {...name}  />
      </div>
      
    </>
  );
}

export default App;
