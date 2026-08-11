import {Link} from "react-router"

export default function UserList(){
    const userData = [
        {id:1,name:'Nishu'},
        {id:2,name:'Nitish'},
        {id:3,name:'Sam'},
        {id:4,name:'Peter'},
        {id:5,name:'Tony'},
        {id:6,name:'Bruce'},
    ]
    return (
        <div style={{marginLeft:20}}>
           <h1>UserList Page</h1> 
           {
            userData.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                </div>
            ))
           }
        </div>
    )
}