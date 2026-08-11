import {useParams} from "react-router";
import { useEffect,useState} from "react";
function UserEdit(){
    const {id}=useParams();

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');

    useEffect(()=>{
       getUserData()
     },[])

     const getUserData=async ()=>{
        console.log(id);
        const url = "http://localhost:3000/users/"+id;
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name);
        setEmail(response.email);
        setAge(response.age);
     }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Edit User Details</h1>
            <input type="text" key={name} value={name} placeholder="user name" />
            <br/><br/>
            <input type="text" key={name} value={email} placeholder="user email" />
            <br/><br/>
            <input type="text" key={name} value={age} placeholder="user age" />
            <br/><br/>
            <button>Update User</button>
        </div>
    )
}
export default UserEdit;