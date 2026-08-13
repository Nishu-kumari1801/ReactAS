import { useActionState, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import UserList from './UserList'
import UserAdd from './UserAdd'
import {Routes,Route} from 'react-router';
import {Link , NavLink} from 'react-router'
import UserEdit from './UserEdit'

// ======================================================
//                 lecture :-01 (What is API)
// ======================================================

/**
 * Application programming interface
 * we need data from db when making  projects
 * but js can not connect with database as js is a clent site scripting language and 
 * database is server side scripting language.
 * so we make api in other language as java php or node etc
 */

/** Shared data with API
 * we need some data in multiple platform
 * like web app , mobile app , windows OS etc
 * so we make API in one language
 * And use same API with all platforms
 * Data format :- API uses JSON data
 */

// function App() {
//   return (
//     <>
//      <h1>What is API</h1>
//     </>
//   )
// }


// ======================================================
//                 lecture :-02 (Get Data from GET API Method in React)
// ======================================================

/**[API methods , test API , Integrate API , Display API data , ] */

/**API methods :- GET , POST, PUT/PATCH, DELETE */
/**Test API :- postman usually or on vs code use extension thunderClient */
/**Integrate API :-  */

// function App() {
//   const [usersData , setUsersData]=useState([]);
//   useEffect(()=>{
//      getUsersData();
//   },[])
//   async function getUsersData(){
//     const url="https://dummyjson.com/users";
//     let response=await fetch(url);
//     response = await response.json();
//     // console.log(response.users);
//     setUsersData(response.users)
//   }
//   console.log(usersData);
//   return (
//     <>
//      <h1>Get Data from GET API Method in React</h1>
//      <ul className='user-list-head'>
//           <li>FirstName</li>
//           <li>LastName</li>
//           <li>Age</li>
//       </ul>
//      {
//       usersData && usersData.map((user)=>(
//          <ul className='user-list'>
//           <li>{user.firstName}</li>
//           <li>{user.lastName}</li>
//           <li>{user.age}</li>
//          </ul>
//       ))
//      }
//     </>
//   )
// }

// ======================================================
//                 lecture :-03 (Setup JSON Server for API )
// ======================================================

/**
 * 
 * json Server is a tool to create api this tools are used as 
 * the public online available api work on get method mostly so we need this
 */
 /**[install json server , make db.json file , run json server , make users API , test api with thunderClient] */

// function App(){
//   return (
//     <>
//     <h1>Setup JSON Server for API</h1>
//     </>
//   )
// }


// ======================================================
//                 lecture :-05 (Integrate JSON Server APIs and Display Data)
// ======================================================

/**[make function for API call,Display data for UI from API,common error fix,make loading state,display loader]  */
// function App(){

//   const [userData,setUserData]=useState([]);
//   const [loading,setLoading]=useState(false);

//   useEffect(()=>{
//     setLoading(true);
//     getUserData();
//   },[])

//   const getUserData = async()=>{
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url);
//     response=await response.json();
//     console.log(response);
//     setUserData(response);
//     setLoading(false);
//   }
//   return (
//     <>
//     <h1>Setup JSON Server for API</h1>
//       <ul className='user-list user-list-head'>
//           <li>Name</li>
//           <li>Age</li>
//           <li>Email</li>
//       </ul>
//     {
//       !loading?
//       userData.map((user)=>(
//          <ul key={user.name} className='user-list'>
//           <li>{user.name}</li>
//           <li>{user.age}</li>
//           <li>{user.email}</li>
//          </ul>
//       ))
//       :<h1>Data Loading....</h1>
//     }
//     </>
//   )
// }

// ======================================================
//                 lecture :-06 (Add User and User List Routes for APIs)
// ======================================================


/**[make browserRouter wrapper around the app , make routes , make components,make links
 * test link , route and screens ]
] */
// function App(){

//   return (
//     <>
//      <ul className='nav-list'>
//       <li>
//         <NavLink to="/">List</NavLink>
//       </li>
//       <li>
//         <NavLink to="/add">Add User</NavLink>
//       </li>
//      </ul>
//     {/* <h1>Make routes pages for add User and user list UI</h1> */}
//     {/* <UserList/> */}
//     <Routes>
//       <Route path="/" element={<UserList/>}></Route>
//       <Route path="/add" element={<UserAdd/>}></Route>
//     </Routes>
//     </>
//   )
// }

 //======================================================
//                 lecture :-07 ( Integrate API for POST Method)
// ======================================================

 //======================================================
//                 lecture :-08 ( Integrate API for DELETE Method)
// ======================================================

 //======================================================
//                 lecture :-09 (Integrate API for Edit Method)
// ======================================================

 //======================================================
//                 lecture :-10 (Populate Data in Input Fields with API )
// ======================================================

// function App(){

//   return (
//     <>
//      <ul className='nav-list'>
//       <li>
//         <NavLink to="/">List</NavLink>
//       </li>
//       <li>
//         <NavLink to="/add">Add User</NavLink>
//       </li>
//      </ul>
//     {/* <h1>Make routes pages for add User and user list UI</h1> */}
//     {/* <UserList/> */}
//     <Routes>
//       <Route path="/" element={<UserList/>}></Route>
//       <Route path="/add" element={<UserAdd/>}></Route>
//       <Route path="/edit/:id" element={<UserEdit/>}></Route>
//     </Routes>
//     </>
//   )
// }

 //======================================================
//                 lecture :-11 (Integrate PUT API for Update Data)
// ======================================================

// function App(){

//   return (
//     <>
//      <ul className='nav-list'>
//       <li>
//         <NavLink to="/">List</NavLink>
//       </li>
//       <li>
//         <NavLink to="/add">Add User</NavLink>
//       </li>
//      </ul>
//     {/* <h1>Make routes pages for add User and user list UI</h1> */}
//     {/* <UserList/> */}
//     <Routes>
//       <Route path="/" element={<UserList/>}></Route>
//       <Route path="/add" element={<UserAdd/>}></Route>
//       <Route path="/edit/:id" element={<UserEdit/>}></Route>
//     </Routes>
//     </>
//   )
// }

//======================================================
//                 lecture :-12 (Simple Validation in React Forms)
// ======================================================

// function App(){

//   const [name,setName]=useState('');
//   const [nameErr,setNameErr]=useState('');

//   const [password,setPassword]=useState('');
//   const [passwordErr,setPasswordErr]=useState('');

//   const handleName=(event)=>{
//     console.log(event.target.value);
//     if(event.target.value.length>5){
//       setNameErr("Please enter valid username . Only 5 characters allowed");
//     }else{
//       setNameErr();
//     }
//   }

//   const handlePassword=(event)=>{
//     let regex =/^[A-Z0-9]+$/i;
//     if(!regex.test(event.target.value)){
//       setPasswordErr("Please enter valid password . Only numbers and alphabets allowed");
//     }else{
//       setPasswordErr();
//     }
//   }


//   return (
//    <div>
//     <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder='enter name' />
//     <span>{nameErr && nameErr}</span><br/><br/>
//     <input className={passwordErr?'error':''} type="text" onChange={handlePassword} placeholder='enter password' />
//     <span className='red-color'>{passwordErr && passwordErr}</span><br/><br/>
//     <button disabled={passwordErr||nameErr}>Login</button>
//    </div>
//   )
// }

//======================================================
//                 lecture :-13 (Validation with useActionState Hook)
// ======================================================

// function App() {
//   const handleLogin = (prevData, formData) => {
//     let name = formData.get('name');
//     let password = formData.get('password');
//     let regex =/^[A-Z0-9]+$/i;
//     if(!name || name.length>5){
//        return {error:'Name cannot be empty or Name should not contain more than 5 characters',name,password}
//     }else if(!regex.test(password)){
//        return {error:'Password can only numbers and alphabets',name,password}
//     }else{
//        return {message:'Login done',name,password}
//     }
//     console.log(name, password);
//   };

//   const [data, action, pending] = useActionState(handleLogin);


//   return (
//     <div>
//       <h1>Validation with useActionState Hook</h1>
//       {
//         data?.mesaage && <span style={{color:'green'}}>{data?.message}</span>
//       }
//       {
//         data?.error && <span style={{color:'red'}}>{data?.error}</span>
//       }
//       <form action={action}>
//         <input type="text" defaultValue={data?.name} name="name" placeholder="enter username" />
//         <br /><br />
//         <input type="password" defaultValue={data?.password} name="password" placeholder="enter password" />
//         <br /><br />
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }


//======================================================
//                 lecture :-13 (React 19 useReducer Hook )
// ======================================================

const emptyData={
  name:'',
  password:'',
  email:'',
  city:'',
  address:''
}

const reducer=(data,action)=>{
  return {... data, [action.type]:action.val}
}

function App() {
  const [state,dispatch]=useReducer(reducer,emptyData)
  console.log(state);
  return (
    <div>
     <h1>React 19 useReducer Hook </h1>
     <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder="enter name" /><br/><br/>
     <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder="enter password" /><br/><br/>
     <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder="enter email" /><br/><br/>
     <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder="enter city" /><br/><br/>
     <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder="enter address" /><br/><br/>

     <ul>
      <li>Name:{state.name}</li>
      <li>Password:{state.passowrd}</li>
      <li>Email:{state.email}</li>
      <li>City:{state.city}</li>
      <li>Address:{state.address}</li>
     </ul>
     <button onClick={()=>console.log(state)}>Add details</button>
    </div>
  );
}
export default App
