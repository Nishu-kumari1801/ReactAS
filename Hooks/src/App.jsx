import { useEffect, useState ,useRef, useTransition} from 'react'
import {useFormStatus} from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './Counter'
import './css/style.css'
import UserProfile from './UserProfile'
import styled from "styled-components"
import { Button,Alert } from 'react-bootstrap'
import User from './User'
import UserInput from './UserInput'
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';

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

// function App(){

  // const cardStyle={
  //       border:'1px solid #cccccc3b',
  //       width:'200px',
  //       boxShadow: '1px 2px 3px 0px #cccccc57',
  //       margin:'10px'
  // }

//   return (
//     <>
//     <h1 style={{color:'red'}}>Inline Style in React with CSS  </h1>
//     <div style={{display:'flex', flexWrap:'wrap'}}>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     </div>
//     <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//         <div style={{padding:'5px'}}>
//           <h3>Nishu jha</h3>
//           <p>Software developer</p>
//         </div>
//     </div>
//     </>
//   )
// }

// ======================================================
//                 lecture :-06 (Dynamic and Conditional Inline Style)
// ======================================================

// function App(){

//   const [cardStyle,setCardStyle]=useState({
//         border:'1px solid #cccccc3b',
//         width:'200px',
//         boxShadow: '1px 2px 3px 0px #cccccc57',
//         margin:'10px'
//   })

//   const [textColor,setTextColor] = useState('black');
//   const [grid,setGrid]=useState(true);

//   const updateTheme =(bgColor,textColor)=>{
//       // console.log(bgColor,textColor);
//       setCardStyle({...cardStyle,backgroundColor:bgColor})
//       setTextColor(textColor)
//   }

//   return (
//     <>
//     <h1>Dynamic and Conditional Inline Style</h1>
//     <button onClick={()=>updateTheme('grey','red')}>Gray Theme</button>
//     <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
//     <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
//     <div style={{display:grid?'flex':'block', flexWrap:'wrap'}}>
//        <div style={cardStyle}>
//            <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//            <div style={{padding:'5px',color:textColor}}>
//              <h3>Nishu jha</h3>
//              <p>Software developer</p>
//            </div>
//        </div>
//        <div style={cardStyle}>
//            <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//            <div style={{padding:'5px',color:textColor}}>
//              <h3>Nishu jha</h3>
//              <p>Software developer</p>
//            </div>
//        </div>
//        <div style={cardStyle}>
//            <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//            <div style={{padding:'5px',color:textColor}}>
//              <h3>Nishu jha</h3>
//              <p>Software developer</p>
//            </div>
//        </div>
//        <div style={cardStyle}>
//            <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//            <div style={{padding:'5px',color:textColor}}>
//              <h3>Nishu jha</h3>
//              <p>Software developer</p>
//            </div>
//        </div>
//        <div style={cardStyle}>
//            <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
//            <div style={{padding:'5px',color:textColor}}>
//              <h3>Nishu jha</h3>
//              <p>Software developer</p>
//            </div>
//        </div>
//      </div>
//     </>
//   )
// }

// ======================================================
//                 lecture :-07 (External style in React)
// ======================================================

// function App(){
//   return (
//     <>
//     <h1 className='heading'>External style in React</h1>
//     <div className='container'>
//     <div className='user-card'>
//       <div>
//         <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" />
//       </div>
//       <div className='text-wrap'>
//         <h4>Nishu jha</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     <div className='user-card'>
//       <div>
//         <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" />
//       </div>
//       <div className='text-wrap'>
//         <h4>Nishu jha</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     <div className='user-card'>
//       <div>
//         <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" />
//       </div>
//       <div className='text-wrap'>
//         <h4>Nishu jha</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     <div className='user-card'>
//       <div>
//         <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" />
//       </div>
//       <div className='text-wrap'>
//         <h4>Nishu jha</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     <div className='user-card'>
//       <div>
//         <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" />
//       </div>
//       <div className='text-wrap'>
//         <h4>Nishu jha</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// }

// ======================================================
//                 lecture :-08 (Style with CSS Module)
// ======================================================

// function App(){
//   return (
//     <>
//     <h1>Style with CSS Module</h1>
//     <div style={{display:"flex",flexWrap:"wrap"}}>
//     <UserProfile/>
//     <UserProfile/>
//     <UserProfile/>
//     <UserProfile/>
//     <UserProfile/>
//     <UserProfile/>
//     <UserProfile/>
//     </div>
//     </>
//   )
// }

// ======================================================
//                 lecture :-09 (React Styled Components)
// ======================================================

// function App(){
  
//   // const Heading = styled.h1`
//   // color:red;
//   // border:1px solid green;
//   // border-radius:5px;
//   // margin:20px;
//   // padding:20px
//   // `

//   const Heading=styled.h1({
//       color:'red',
//       border:'1px solid green',
//       borderRadius:'5px',
//       margin:'20px',
//       padding:'20px'
//   })

//   const StyleBtn = styled.button`
//   color:red;
//   width:130px;
//   height:40px;
//   margin:20px;
//   `
//   return (
//     <>
//     <h1>React Styled Components</h1>
//     <Heading>Hello Heading</Heading>
//     <Heading>Hello Heading 2</Heading>
//     <Heading>Hello Heading 3</Heading>
//     <Heading>Hello Heading 4</Heading>
//     <StyleBtn>Login</StyleBtn>
//     <StyleBtn>Signup</StyleBtn>
//     <StyleBtn>SignOut</StyleBtn>
//     </>
//   )
// }

// ======================================================
//                 lecture :-10 (Adding Bootstrap in React App)
// ======================================================

// function App(){
//   return (
//     <>
//     <h1>Adding Bootstrap in React App</h1>
//     <Button>Login</Button>
//     <Alert variant="danger">Hello-BT installed</Alert>
//     <Button variant='success'>ok</Button>
//     <Alert variant='warning'>ok</Alert>
//     </>
//   )
// }

// ======================================================
//                 lecture :-11 (useRef Hook in React 19)
// ======================================================

// function App(){
//   const inputRef = useRef(null);
//   const h1Ref = useRef(null);
//   const inputHandler = ()=>{
//     console.log(inputRef);
//     inputRef.current.focus();
//     inputRef.current.style.color='red';
//     inputRef.current.placeholder="enter password";
//     inputRef.current.value="123";
//   }
//   const toggleHandler=()=>{ 
//     if(inputRef.current.style.display != 'none'){
//         inputRef.current.style.display = 'none';
//     }else{
//       inputRef.current.style.display = 'inline';
//     }
//   }

//   const h1Handler=()=>{
//     h1ref.current.style.color='green'
//   }

//   return (
//     <>
//     <h1>useRef Hook in React 19</h1>
//     <button onClick={toggleHandler}>Toggle</button>
//     <input ref={inputRef} type="text" placeholder="enter username"></input>
//     <button onClick={inputHandler}>Focus onInput field</button>
//     <h1 ref={h1Ref}>Code step by step</h1>
//     <button onClick={h1Handler}>Handler</button>
//     </>
//   )
// }

// ======================================================
//                 lecture :-12 (React Uncontrolled Component)
// ======================================================

// function App(){

//   const userRef = useRef();
//   const passwordRef = useRef();

//   const handleForm=(event)=>{
//     event.preventDefault();
//     const user = document.querySelector("#user").value;
//     const password = document.querySelector("#password").value;
//     console.log(user,password);
//   }

//   const handleFormRef=()=>{
//     event.preventDefault();
//     const user=userRef.current.value;
//     const password=passwordRef.current.value;
//     console.log("handleFormref",user,password)
//   }
//   return (
//     <>
//     <h1>React Uncontrolled Component</h1>
//     <form action="" method="post" onSubmit={handleForm}>
//       <input type="text" id="user" placeholder="enter user name"/>
//       <br/><br/>
//       <input type="password" id="password" placeholder="enter password"/>
//       <br/><br/>
//       <button>Submit</button>
//     </form>
//     <hr/>
//     <h1>React Uncontrolled Component with useRef</h1>
//     <form action="" method="post" onSubmit={handleFormRef}>
//       <input type="text" ref={userRef} id="userRef" placeholder="enter user name"/>
//       <br/><br/>
//       <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter password"/>
//       <br/><br/>
//       <button>Submit with ref</button>
//     </form> 
//     </>
//   )
// }

// ======================================================
//                 lecture :-13 (Pass function as Props)
// ======================================================

// function App(){
//   const displayName = (name)=>{
//     alert(name);
//   }
//   const getUser=()=>{
//     alert("get user function called");
//   }
//   return (
//     <>
//     <h1>Pass function as Props</h1>
//     <User displayName={displayName} name="nishu" getUser={getUser}/>
//     <User displayName={displayName} name="sam" getUser={getUser}/>
//     <User displayName={displayName} name="peter" getUser={getUser}/>
//     </>
//   )
// }

// ======================================================
//                 lecture :-14 ( ForwardRef in React 19)
// ======================================================

// function App(){
//   const inputRef=useRef(null);
//   const updateInput=()=>{
//     inputRef.current.value=1000;
//     inputRef.current.focus();
//     inputRef.current.style.color="green"
//   }
//   return (
//     <>
//     <h1> ForwardRef in React 19</h1>
//     <UserInput ref={inputRef}/>
//     <button onClick={updateInput}>Update Input field</button>
//     </>
//   )
// }

// ======================================================
//                 lecture :-15 (useFormStatus Hook)
// ======================================================

// function App(){
//   const handleSubmit= async ()=>{
//     await new Promise(res=>setTimeout(res,2000));
//     console.log("submit");
//   }
//   function CustomForm(){
//     const {pending} =useFormStatus();
//     console.log(pending);
//     return(
//       <>
//       <input type="text" placeholder="Enter name"/><br/><br/>
//        <input type="text" placeholder="Enter password"/><br/><br/>
//        <button disabled={pending}>{pending?'submitting':'submit'}</button>
//       </>
//     )
//   }
//   return (
//     <>
//     <h1>useFormStatus Hook</h1>
//     <form action={handleSubmit}>
//        <CustomForm/>
//     </form>
//     </>
//   )
// }

// ======================================================
//                 lecture :-16 (useTransition Hook in React JS)
// ======================================================

// function App(){
//   // const [pending,setPending]=useState(false);
//     const [pending,startTransition] = useTransition();

//   const handleButton=async()=>{
//      startTransition(async()=>{
//       await new Promise(res=>setTimeout(res,2000))
//      })
//     // setPending(true);
    
//     // setPending(false);

//   }
//   return (
//     <>
//     <h1>useTransition Hook in React JS</h1>
//     <button disabled={pending} onClick={handleButton}>Click</button>
//     </>
//   )
// }

// ======================================================
//                 lecture :-16 (React JS Pure Component)
// ======================================================

// function App(){
//   return (
//     <>
//     <h1>React JS Pure Component </h1>
//     </>
//   )
// }

// ======================================================
//                 lecture :-16 (Derived State in React )
// ======================================================

/** Derived state in react js :-
 * state that is calculated or derived from other state values or props within 
 * your component.
 * derived state can be a variable
 * No need to extra state only variables or constants are enough.
*/

// function App(){
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState('');
//   const handleAddUsers = ()=>{
//     setUsers([...users,user])
//   }
//   // console.log(users);

//   const total=users.length; //derived state
//   const last = users[users.length-1]
//   const unique = [...new Set(users)].length

//   return (
//     <>
//     <h1> Derived State in React</h1>
//     <h2>Total User : {total}</h2>
//     <h2>Last User : {last}</h2>
//     <h2>Unique Total User : {unique}</h2>
//     <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='add new user' />
//     <button onClick={handleAddUsers}>Add User</button>
//     {
//       users.map((item,index)=>(
//         <h4 key={index}>{item}</h4>
//       ))
//     }
//     </>
//   )
// }



// ======================================================
//                 lecture :-17 (Lifting State Up)
// ======================================================

// function App(){
//    const [user,setUser] = useState('')
//   return (
//     <div>
//       <AddUser setUser={setUser}/>
//       <DisplayUser user={user}/>
//     </div>
//   )
// }

// ======================================================
//                 lecture :-18 (Updating objects in state)
// ======================================================

function App(){
  // const [name,setName] = useState('nishu');

  const [data,setData]=useState({
    name:'nishu',
    address:{
      city:'delhi',
      country:'India'
    }
  })

  const handleName=(val)=>{
    data.name=val;
    console.log(data);
    setData({...data});
  }

  const handleCity=(city)=>{
    data.address.city=city;
    console.log(city);
    setData({...data,address:{...data.address,city}})
  }

  return (
    <div>
      <h1>Updating objects in state</h1>
      
      {/* <button onClick={handleName}>Update name</button> */}
      <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)}/>
      <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)}/>
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  )
}

export default App
