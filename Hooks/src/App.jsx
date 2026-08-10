import { useEffect, useState ,useRef, useTransition, useActionState,useId} from 'react'
import {useFormStatus} from 'react-dom';
import useToggle from './useToggle';
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
import College from './College';
import ClassComponent from './ClassComponent';
import Student from './Student';
import { SubjectContext } from './ContextData';
import { BrowserRouter ,Routes ,Route,Link } from "react-router";
import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './NavBar';

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

// function App(){
//   // const [name,setName] = useState('nishu');

//   const [data,setData]=useState({
//     name:'nishu',
//     address:{
//       city:'delhi',
//       country:'India'
//     }
//   })

//   const handleName=(val)=>{
//     data.name=val;
//     console.log(data);
//     setData({...data});
//   }

//   const handleCity=(city)=>{
//     data.address.city=city;
//     console.log(city);
//     setData({...data,address:{...data.address,city}})
//   }

//   return (
//     <div>
//       <h1>Updating objects in state</h1>
      
//       {/* <button onClick={handleName}>Update name</button> */}
//       <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)}/>
//       <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)}/>
//       <h2>Name: {data.name}</h2>
//       <h2>City: {data.address.city}</h2>
//       <h2>Country: {data.address.country}</h2>
//     </div>
//   )
// }

// ======================================================
//                 lecture :-19 (Updating array in state)
// ======================================================

// function App(){
//   // const [name,setName] = useState('nishu');
//   const [data,setData] = useState(['nishu','sam','peter','tony']);
//   const handleUser=(name)=>{
//     data[data.length-1]=name;
//     console.log(data);
//     setData([...data])
//   }
//   return (
//     <>
//     <h1>Updating array in state</h1>
//     <input type="text" placeholder='enter last user name' 
//     onChange={(e)=>handleUser(e.target.value)}></input>
//      {
//       data.map((item,index)=>(
//         <h3 key={index}>{item}</h3>
//       ))
//      }
//     </>
//   )
// }

// ======================================================
//                 lecture :-20 (useAction Hook)
// ======================================================

// function App(){
//   const handleSubmit=async(previousData,formData)=>{
//     let name = formData.get('name');
//     let password = formData.get('password');
//     await new Promise(res=>setTimeout(res,2000))
//     console.log("handleSubmit called",name,password);
//     if(name && password){
//       return {message:'Data submitted',name,password};
//     }else{
//       return {error :'Failed to submit. Enter proper data',name,password}
//     }
//   }
//   const [data,action,pending] = useActionState(handleSubmit,undefined);
//   console.log(data);
//   return (
//     <div>
//     <h1>useAction Hook</h1>
//     <form action={action}> 
//         <input defaultValue={data?.name} type="text" placeholder='enter name' name='name'/>
//         <br/><br/>
//         <input defaultValue={data?.password} type="password" placeholder='enter password' name='password'/>
//         <br/><br/>
//         <button disabled={pending}>Submit Data</button>
//         <br/><br/>
       
//     </form>

//         {
//           data?.error && <span style={{color:'red'}}>{data?.error}</span>
//         }
//         {
//           data?.message && <span style={{color:'green'}}>{data?.message}</span>
//         }
//         <h3>Name: {data?.name}</h3>
//         <h3>Password: {data?.password}</h3>
//     </div>
//   )
// }

// ======================================================
//                 lecture :-21 (useId Hook in React 19)
// ======================================================

// function App(){
 
//   return (
//     <>
//     <UserForm/><hr/>
//     <UserForm/><hr/>
//     <UserForm/><hr/>
    
//     </>
//   )
// }

// function UserForm(){
//   const name = useId();
//   const password = useId();
//   const terms = useId();
//   const skills = useId();
//   return (
//     <>
   
//      <form action="">
//       <label htmlFor={name}>Enter username</label>
//       <input id={name} type="text" placeholder='enter name'/>
//       <br/><br/>
//       <label htmlFor={password}>Enter password</label>
//       <input id={password} type="text" placeholder='enter password'/>
//       <br/><br/>
//       <label htmlFor={skills}>Enter skills</label>
//       <input id={skills} type="text" placeholder='enter skills'/>
//       <br/><br/>
//       <input id={terms} type="checkbox" placeholder='enter terms'/>
//       <label htmlFor={terms}>Terms and condition</label>
//      </form>
//     </>
//   )
// }

// ======================================================
//                 lecture :-21 (React JS Fragment)
// ======================================================


// ======================================================
//                 lecture :-22 ( React JS Fragment)
// ======================================================

/* 
Fragments can be used as parent element and it does not create any extra element
 */

// function App(){
//   return (
//     <>
//     <h1>React JS Fragment</h1>
//     </>
//   )
// }

// ======================================================
//                 lecture :-23 (React JS Rules for Hooks)
// ======================================================

/** start with use (useRef,useEffect,useRef)
 * use Hooks at top level
 * 
 */

// ======================================================
//                 lecture :-24 (Make custom Hooks)
// ======================================================

// function App(){
//   const [value,toggleValue]=useToggle(true);
//   const [data,setData] = useToggle(true);
//   console.log("val----",value);
//   return (
//     <>
//     <button onClick={toggleValue}>Toggle Heading</button>
//     <button onClick={()=>toggleValue(false)}>Hide Heading</button>
//     <button onClick={()=>toggleValue(true)}>show Heading</button>
//     {
//       value?<h1>Make custom hooks</h1>:null
//     }
//     <hr/>
//         <button onClick={setData}>Toggle Heading</button>
//     <button onClick={()=>setData(false)}>Hide Heading</button>
//     <button onClick={()=>setData(true)}>show Heading</button>
//     {/* <h1>second heading</h1> */}
//     {
//       data?<h1>second heading</h1>:null
//     }
//     </>
//   )
// }

// ======================================================
//                 lecture :-25 (Context API)
// ====================================================== 

// function App(){
//   const [subject,setSubject] = useState('')
//   return (
//     <div style={{backgroundColor:'yellow',padding:10}}>
//     <SubjectContext.Provider value={subject}>
//       <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
//         <option value="">Select Subject</option>
//         <option value="Maths">Maths</option>
//         <option value="English">English</option>
//         <option value="Physics">Physics</option>
//       </select>
//       <h1>Context API</h1>
//       <button onClick={()=>setSubject('')}>Clear subject</button>
//        <College/>
//     </SubjectContext.Provider>
//     </div>
//   )
// }


// ======================================================
//                 lecture :-25 (React Router)
// ====================================================== 

// function App(){
//   return (
//     <>
//     <h1>React Router</h1>
//     <BrowserRouter>
//     <Link to="/" >Home</Link>
//     <Link to="/about" >About</Link>
//     <Link to="/contact" >Contact</Link>
//     <Routes>
//       <Route path="/" element={<h1>Home</h1>} />
//       <Route path="/about" element={<h1>About</h1>} />
//       <Route path="/contact" element={<h1>Contact</h1>} />
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// ======================================================
//                 lecture :-25 (Basic Example of React Router)
// ======================================================

// function App(){
//   return (
//     <>
//     <NavBar/>
//     <Routes>
//        <Route path="/" element={<Home/>} > </Route>
//        <Route path="/about" element={<About/>} > </Route>
//        <Route path="/Login" element={<Login/>} > </Route>
//     </Routes>
//     </>
//   )
// }

// ======================================================
//                 lecture :-25 (Header with React Router )
// ======================================================

function App(){
  return (
    <>
    <NavBar/>
    <Routes>
       <Route path="/" element={<Home/>} > </Route>
       <Route path="/about" element={<About/>} > </Route>
       <Route path="/Login" element={<Login/>} > </Route>
    </Routes>
    </>
  )
}


export default App
