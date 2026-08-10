import User from "./User";

function Loop(){
     const userName = ['anil','sam','peter','bruce'];
     const userData=[
        {
            name:'Anil',
            age:29,
            email:'anil@test.com',
            id:1
        },
        {
            name:'sam',
            age:20,
            email:'sam@test.com',
            id:2
        },
        {
            name:'peter',
            age:19,
            email:'peter@test.com',
            id:3
        },
        {
            name:'bruce',
            age:10,
            email:'bruce@test.com',
            id:4
        }
     ]
    return(
       
        <div>
            {/* <h1>Loop in jsx with Map Function</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table> */}
            <h1>Reuse component in Loop</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <User dataf={user}/>
                    </div>
                    
                ))
            }
        </div>
    )
}
export default Loop;