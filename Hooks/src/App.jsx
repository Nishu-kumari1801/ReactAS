import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'

// ======================================================
//                 lecture :-01 (What are Hooks in React)
// ======================================================

// function App() {
//   const[count,setCount]=useState(0);
//   const [data,setData]=useState(0);
//   useEffect(()=>{
//     // callOnce();
//     counterFunction();
//   },[count])
//   function counterFunction(){
//     console.log("counterFunction",count);
//   }
//   // counterFunction();
//   function callOnce(){
//     console.log("callOnce function called");
//   }

//   return (
//    <>
//    <h1>Hooks in react</h1>
//    <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
//    <button onClick={()=>setData(data+1)}>Data: {data}</button>
//    </>
//   )
// }


// ======================================================
//                 lecture :-02 (useEffect Hook in detail)
// ======================================================

function App(){
  const [count,setCount]=useState(0);
  const [data,setData] = useState(0);
  return (
    <>
    <h1>useState hook in react</h1>
    <Counter count={count} data={data}/>
    <button onClick={()=>setCount(count+1)}>counter</button>
    <button onClick={()=>setData(data+1)}>Data</button>
    </>
  )
}

export default App
