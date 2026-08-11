import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

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

function App() {
  const [usersData , setUsersData]=useState([]);
  useEffect(()=>{
     getUsersData();
  },[])
  async function getUsersData(){
    const url="https://dummyjson.com/users";
    let response=await fetch(url);
    response = await response.json();
    // console.log(response.users);
    setUsersData(response.users)
  }
  console.log(usersData);
  return (
    <>
     <h1>Get Data from GET API Method in React</h1>
     <ul className='user-list-head'>
          <li>FirstName</li>
          <li>LastName</li>
          <li>Age</li>
      </ul>
     {
      usersData && usersData.map((user)=>(
         <ul className='user-list'>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
         </ul>
      ))
     }
    </>
  )
}



export default App
