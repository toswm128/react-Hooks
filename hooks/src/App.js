import React,{useState} from "react"


const useInput = (initialValue,vaildator) =>{
  const [value, setValue] = useState(initialValue);
  const onChange = event =>{
    const {
      target:{value}
    }= event;
    let willUpdate = true;
    if(typeof vaildator ==="function"){
      willUpdate = vaildator(value)
    }
    if(willUpdate){
      setValue(value)
    }
  };
  return { value, onChange }
}

function App()   {
  const maxLen = value => !value.includes("@")
  const name = useInput("Mr.",maxLen)
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
