import { useState } from "react";
import Counter from "./components/counter";
function App() {

  const [count,setCount]= useState(0)
  
function Addc(){
  

  setCount(count+1)
  console.log(count);
}
  return (
     
    <div>
      <button onClick={Addc}>Add</button>
     <Counter title ='1st counter'count={count}/>
     <Counter title='2nd conter' count={count}/>
  </div>
  );
}

export default App;

