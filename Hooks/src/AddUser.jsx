import { useState } from "react";
function AddUser({setUser}){
   
    return (
        <>
        <h1>Add User </h1>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name"></input>
        <hr/>
        </>
    )
}
export default AddUser;