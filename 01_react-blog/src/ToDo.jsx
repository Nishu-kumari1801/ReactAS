function ToDo (){
    function callFun(){
        alert("function called");
    }
    return (
        <>
        <h1>To Do component</h1>
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
        <button onClick={callFun()}>Click Me</button>
        </>
    )
}
export default ToDo;