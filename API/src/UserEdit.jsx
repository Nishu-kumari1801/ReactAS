import {useNavigate, useParams} from "react-router";
import { useEffect,useState} from "react";
function UserEdit(){
    const {id}=useParams();

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const url = "http://localhost:3000/users/"+id;
    const navigate=useNavigate();

    useEffect(()=>{
       getUserData()
     },[])

     const getUserData=async ()=>{
        console.log(id);
       
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name);
        setEmail(response.email);
        setAge(response.age);
     }

     const updateUserData=async()=>{
        // console.log(name,age,email);
        let response = await fetch(url,{
            method:'PUT',
            body:JSON.stringify({name,age,email})
        });
        response=await response.json();
        // console.log(response);
        if(response) {
            // alert("User data updated");
            navigate('/');
        }
     }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Edit User Details</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="user name" />
            <br/><br/>
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="user email" />
            <br/><br/>
            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="user age" />
            <br/><br/>
            <button onClick={updateUserData}>Update User</button>
        </div>
    )
}
export default UserEdit;