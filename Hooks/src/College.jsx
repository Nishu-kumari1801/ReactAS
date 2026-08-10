// import ClassComponent from "./ClassComponent";

// export default function College(){
//     return (
//         <div style={{backgroundColor:'orange',padding:10}}>
//             <h1>college Componenet</h1>
//             <ClassComponent/>
//         </div>
//     )
// }

// for nested navigation  with react router

import {Link,NavLink,Outlet} from "react-router";

export default function College(){
    return (
        <div className="college" style={{textAlign:'center'}}>
            <h1>College Page</h1>
            <NavLink className="link" to="student">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="details">College Details</NavLink>
            <Outlet/>
        </div>
    
    )
}