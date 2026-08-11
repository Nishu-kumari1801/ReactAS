import { useParams } from "react-router";
import { Link } from "react-router";
export default function UserDetail(){
    const paramsData = useParams();
    console.log(paramsData.id);
    return (
        <div style={{marginLeft:20}}>
           <h1>UserDetail Page</h1> 
           <h2>User id is : {paramsData.id}</h2>
           <h3><Link to="/users">Back</Link></h3>
        </div>
    )
}