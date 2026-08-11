import { useState } from 'react'
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
//                 lecture :-09 ( Integrate API for Edit Method)
// ======================================================

function App(){

  return (
    <>
     <ul className='nav-list'>
      <li>
        <NavLink to="/">List</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add User</NavLink>
      </li>
     </ul>
    {/* <h1>Make routes pages for add User and user list UI</h1> */}
    {/* <UserList/> */}
    <Routes>
      <Route path="/" element={<UserList/>}></Route>
      <Route path="/add" element={<UserAdd/>}></Route>
      <Route path="/edit/:id" element={<UserEdit/>}></Route>
    </Routes>
    </>
  )
}

export default App
