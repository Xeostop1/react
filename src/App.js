import './App.css';
import {useState, useEffect} from "react";
  

function App() {
 const [toDo, setToDo]=useState("");
 const [toDos, setToDos]=useState([]);
 const onChane=(event)=>{
    setToDo(event.target.value);
    // console.log(toDo);
 }
 const onSubmit=(event)=>{
  event.preventDefault();
  if(toDo===""){
    return;
  } 
  setToDo("");
  setToDos((currentArray)=>[toDo, ...currentArray])
}
console.log(toDos);
  return (
    <div className="App">
      <h1>My To dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder='Write your to do....'
            value={toDo}
            onChange={onChane}
          />
          <button>
            Add Todo 5:43까지 진행
          </button>
      </form>
      <hr/>
      {toDos.map()}
    </div>
  );
}

export default App;

//return에 {} 넣으면 js사용
