
import './App.css';
import { useState } from 'react';

function App() {
  const[input,setInput]=useState("");
  const[list,setList]=useState([]);
 // const [togle,setToggle]=useState(true);
//  const [edit,setEdit]=useState(null)
  const add=(ad)=>{
    const newadd={
    id:Math.random(),
    ad:ad,
    };
    setList([...list,newadd])
    setInput("");
  }
  const del=(id)=>{
    const newli=list.filter((ad)=>ad.id!==id)
    setList(newli);
  }
  const up=(id)=>{
    const update=list.find((ad)=>{
      return ad.id===id 
    });
    console.log(update);
//setToggle(false);
setInput(update.newadd);
//setEdit(id);
  }
  return (
    <div className="App">
      <h1>Add student</h1>
      <input type="text" value={input} placeholder="enter name" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>add(input)}>add</button>

      <ul>
        {list.map((ad)=> <li key={ad.id}>{ad.ad}
        &nbsp;&nbsp;
        <button onClick={()=>up(ad.id)}>update</button>
        <button onClick={()=>del(ad.id)}>delete</button></li>
        )}
      </ul>
    </div>
  );
}

export default App;