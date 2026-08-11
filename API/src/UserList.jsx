import { useState } from 'react'
import { useEffect } from 'react'

function UserList(){

  const [userData,setUserData]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    getUserData();
  },[])
  const url = "http://localhost:3000/users";

  const getUserData = async()=>{
    let response = await fetch(url);
    response=await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  }

  const deleteUser=async(id)=>{
    let response = await fetch(url+"/"+id,{
        method:'delete'
    });
    response = await response.json();
    if(response){
        alert("record deleted");
        getUserData();
    }
    console.log(id);
  }
  return (
    <>
      <ul className='user-list user-list-head'>
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>
          <li>Action</li>
      </ul>
    {
      !loading?
      userData.map((user)=>(
         <ul key={user.name} className='user-list'>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
          <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
         </ul>
      ))
      :<h1>Data Loading....</h1>
    }
    </>
  )
}

export default UserList
