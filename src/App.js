import './App.css';
import { useState } from "react"
import Scrn1 from "./components/Scrn1";
import Scrn2 from './components/Scrn2';
import Scrn3 from './components/Scrn3';
import Pattern from './components/psttern';


function App() {
  const [arr,setArr]=useState([])
  const [data,SetData]=useState("")

  const recvfun=(i)=>{
SetData(i)
setArr((prevState)=>[i,...prevState])
  }

  const funcdelete=(id)=>{
    setArr((prevItems)=>{
        return prevItems.filter((item,index)=>{
            return index!==id;
        })
    })

  }

  const rightu=(n)=>{
setArr(n)
  }



 console.log("arr",arr)
  return (
    <div className="App">
      <Scrn1  recvfun={recvfun}/>
      <Scrn2  data={data}/>
      <Scrn3  item={arr} rightu={rightu} funcdelete={funcdelete}/>
    

    </div>
  );
}

export default App;
