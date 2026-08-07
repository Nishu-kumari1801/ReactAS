import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[count,setCount]=useState(0);
  const [data,setData]=useState(0);
  useEffect(()=>{
    // callOnce();
    counterFunction();
  },[count])
  function counterFunction(){
    console.log("counterFunction",count);
  }
  // counterFunction();
  function callOnce(){
    console.log("callOnce function called");
  }

  return (
   <>
   <h1>Hooks in react</h1>
   <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
   <button onClick={()=>setData(data+1)}>Data: {data}</button>
   </>
  )
}

export default App
