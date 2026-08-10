// function User({name="user"}){
//     console.log(name)
//     return (
//     <>
//     <hr/>
//     <h1>User Component</h1>
//     <h1>Hi,{name}</h1>
//     {/* <h2>name : {user.name}</h2>
//     <h2>age : {user.age}</h2>
//     <h2>email : {user.email}</h2> */}
//     </>
//     )
// }

const User = (data) => {
    return (
        <div>
            <h3>Name : {data.name}</h3>
        </div>
    )
}
export default User;