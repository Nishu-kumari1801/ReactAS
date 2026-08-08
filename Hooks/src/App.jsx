import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
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

// function App(){
//   const [count,setCount]=useState(0);
//   const [data,setData] = useState(0);
//   return (
//     <>
//     <h1>useState hook in react</h1>
//     <Counter count={count} data={data}/>
//     <button onClick={()=>setCount(count+1)}>counter</button>
//     <button onClick={()=>setData(data+1)}>Data</button>
//     </>
//   )
// }

// ======================================================
//                 lecture :-03 (useEffect Hook for lifecycle methods)
// ======================================================

// React components go through three main phases:
//
// 1. Mounting
// 2. Updating
// 3. Unmounting
// 4. Error handling


// function App(){
//   const [count,setCount]=useState(0);
//   const [data,setDta]=useState(0);
//   const [display,setDisplay]=useState(true);
//   return (
//     <div>
//       {
//         display ? <Counter count={count} data={data}></Counter>:null
//       }
//       <Counter count={count} data={data}></Counter>
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       <button onClick={()=>setData(data+1)}>Counter</button>
//       <button onClick={()=>setDisplay(!display)}>Toggle</button>
//     </div>
//   )
// }

// ======================================================
//                 lecture :-04 (Style UI in React with CSS)
// ======================================================

// Styling UI in React with CSS

// In React, CSS is used to control the appearance and layout of components such as colors, fonts, spacing, borders, and responsiveness.

// There are several common ways to style React components:

// External CSS

// Create a .css file and import it into the component.
// import './App.css';

// function App() {
//   return <h1 className="title">Hello React</h1>;
// }

// Inline CSS

// Use the style attribute with a JavaScript object.
// <h1 style={{ color: "blue", fontSize: "30px" }}>
//   Hello React
// </h1>

// CSS Modules

// CSS styles are scoped to a particular component.

// import styles from './App.module.css';

// <h1 className={styles.title}>Hello React</h1>

// function App(){
//   return (
//     <h1>Style UI in React with CSS</h1>
//   )
// }

// ======================================================
//                 lecture :-05 (Inline Style in React with CSS)
// ======================================================

function App(){

  const cardStyle={
        border:'1px solid #cccccc3b',
        width:'200px',
        boxShadow: '1px 2px 3px 0px #cccccc57',
        margin:'10px'
  }

  return (
    <>
    <h1 style={{color:'red'}}>Inline Style in React with CSS  </h1>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    </div>
    <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
        <div style={{padding:'5px'}}>
          <h3>Nishu jha</h3>
          <p>Software developer</p>
        </div>
    </div>
    </>
  )
}

export default App
