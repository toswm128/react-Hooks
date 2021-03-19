import React,{useState} from "react"


const content = [
  {
    tap: "1번",
    content: "1번에 들어갈거",
  },
  {
    tap: "2번",
    content: "2번에 들어갈꺼",
  }
]

const useTabs = (initialTab,allTabs) =>{
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return{
    currentItem:allTabs[currentIndex],
    changeItem:setCurrentIndex
  };
};

function App()   {
  const {currentItem,changeItem} = useTabs(0,content)
  return (
    <>
      <div>
        <h1>hi</h1>
        {content.map((section,index)=>
           <button onClick={()=>changeItem(index)}>{section.tap}</button>)}
      </div>
      <div>{currentItem.content}</div>
    </>
  );
}

export default App;
