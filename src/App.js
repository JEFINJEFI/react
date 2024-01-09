import { useState } from "react";
import Employee from "./components/Employee";
function App() {

  const [count,setCount]= useState(0)
  
function Addc(){
  

  setCount(count+1)
  console.log(count);
}
let emp =[
 {name:'jefin',age:20},
  {name:'agil',age:20},
  {name:'sreevidhya',age:20},
  
]
  return (
     
    <div>
      <button onClick={Addc}>Add</button>
      {
        emp.map((obj)=>{
          return(
            <Employee name={obj.name} age={obj.age}/>
          )

        })
      }
    
  </div>
  );
}

export default App;

