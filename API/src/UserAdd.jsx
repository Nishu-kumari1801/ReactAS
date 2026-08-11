import { useState } from "react";

function UserAdd(){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const createUser=async()=>{
        console.log(name,age,email);
        const url = "http://localhost:3000/users";
        let response = await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,email,age})
        });
        response = await response.json();
        if(response){
            alert("new User added");
        }
    }
    return (
        <div style={{textAlign:"center"}}>
        <h1>Add new User</h1>
        <input type="text" onChange={((event)=>setName(event.target.value))} placeholder="enter name"/>
        <br/><br/>
        <input type="text" onChange={((event)=>setAge(event.target.value))} placeholder="enter age"/>
        <br/><br/>
        <input type="text" onChange={((event)=>setEmail(event.target.value))} placeholder="enter email"/>
        <br/><br/>
        <button onClick={createUser}>Add User</button>
        </div>
    )
}
export default UserAdd;