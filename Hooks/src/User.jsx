function User({displayName,name,getUser}){
    // const name="nishujha"
    return(
        <div>
            <button onClick={()=>displayName(name)}>Display name</button>
            <button onClick={()=>getUser()}>Get User</button>
        </div>
    )
}
export default User;