import { useState } from "react";
import Counter from "./components/counter";
function App() {

  const [count,setCount]= useState(0)
  
function Addc(){
  

  setCount(count+1)
  console.log(count);
}
let obj={
  title:'first counter',
  count
}
  return (
     
    <div>
      <button onClick={Addc}>Add</button>
     <Counter {...obj}/>
     <Counter title='2nd conter' count={count}/>
     <Counter title='third' count={count}/>
  </div>
  );
}

export default App;

