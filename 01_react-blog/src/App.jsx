import College from './College';
import Counter from './Counter';
import Student from './Student';
import Skills from './Skills';
import ToDo from './ToDo'
import User from './User';
import Login,{Profile, Setting, UserKeys} from './UserComponent'
import { useState,useContext,useEffect,useId  } from 'react'

// function App(){
//   //alert(sum());
//   return (
//     <>
//     <h1>First Component {sum()}</h1>
//     <Fruit/>
//     <Colors/>
//     <sum/>
//     <Login/>
//     </>
//   )
// }

// function App(){
//   return (
//     <>
//     <h1>Importing and Exporting Components</h1>
//     <Login/>
//     <Profile/>
//     <Setting/>
//     <h1>{UserKeys}</h1>
//     </>
//   )
// }

// function App(){
//   const username="Nishu jha"
//   return (
//   <>
//   <h1>JSX in React js {username}</h1>
//   <h1>{10+20+30}</h1>
//   <button onClick={()=>alert("hello")}>Click</button>
//   </>
//   )
// }

import { createElement } from 'react'
import Wrapper from './Wrapper';
import Radio from './Radio';
import Loop from './Loop';

// function App(){
//   return createElement("div",{id:"rootdiv"},createElement("h1",{class:'h1tag'},"heading tag"));
//   // return (
//   //   <div className='rootOther'>Hello other</div>
//   // )
// }

// function App(){
//   return(
//     <>
//     <ToDo/>
//     </>
//   )
// }

// function App(){
//   const name="nishu jha";
//   let x=10,y=20;
//   function fruit(){
//     return "Apple";
//   }
//   function sum(a,b){
//     return a+b
//   }
//   function operation(a,b,opr){
//     if(opr=="+") return a+b;
//     else if(opr=="-") return a-b;
//     else return a*b;
//   }
//   const userObj ={
//     name:"nishu jha",
//     email:"nishu@test.com"
//   }
//   const userArray=['sam','peter','bruce'];
//   return(
//     <>
//     <h1>JSX with Curly Braces {name}</h1>
//     <h1>{x+y}</h1>
//     {fruit()}
//     <h1>{sum(10,100)}</h1>
//     <h1>{operation(20,10,"-")}</h1>
//     <h1>{userObj.email}</h1>
//     <h1>{userArray[1]}</h1>
//     </>
//   )
// }

// function App(){
//   let fruit="Apple"
//   const handleFruit=()=>{
//     fruit="banana"
//     console.log(fruit);
//   }
//   return (
//     <div>
//       <h1>States in React JS</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//     </div>
//   )
// }

// function App(){
//   const [fruit,setFruit]=useState("Apple");
//   const handleFruit=()=>{
//     setFruit("Banana")
//   }
//   return(
//     <>
//     <h1>States in react js</h1>
//     <h1>{fruit}</h1>
//     <button onClick={handleFruit}>Change fruit name</button>
//     <Counter/>
//     </>
//   )
// }

// function App(){
//   const [display,setDisplay] = useState(true);
//   return (
//     <>
//     <h1>Toggle in React JS</h1>
//     {display?<h1>Nishu jha</h1>:null}
//     <button onClick={()=>setDisplay(!display)}>Toggle</button>
//     </>
//   )
// }

// function App(){
//   const [count,setCount]=useState(0);
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Counter</button>
//     {count==0?<h1>Condition 0</h1>
//     :count==1?<h1>Condition 1</h1>
//     :count==2?<h1>Condition 2</h1>
//     :count==3?<h1>Condition 3</h1>
//     :count==4?<h1>Condition 4</h1>
//     :<h1>Other condition</h1>}
//     </>
//   )
// }

// function App(){
  // let username="nishu jha";
  // let age=24;
  // let email = "nishu@test.com";

//   let userObj1 = {
//      name:"nishujha",
//      age:"24",
//      email:"nishu@test.com"
//   }

//   let userObj2 = {
//      name:"peter",
//      age:"22",
//      email:"peter@test.com"
//   }

//   let collegeNames = ["glb","niet","iet","mit"];
//   const [student,setstudent]=useState("");
//   return (
//     <>
//     <h1>Props in react JS</h1>
//     {/* <User name={username} age={age} email={email}/> */}
//     {/* <h2>{name}</h2> */}
//     {student && <Student name={student}/>}
//     <button onClick={()=>setstudent("bhasker")}>Update student name</button>
//     <College names={collegeNames}/>
//     <User user={userObj1}/>
//     <User user={userObj2}/>
//     </>

//   )
// }

// function App(){
//   return (
//     <>
//     <h1>Props in react js</h1>
//     <User name="nishujha"/>
//     <Wrapper>
//       <h1>Hello everyone</h1>
//     </Wrapper>
//     <Wrapper>
//       <h1>Hello Anil</h1>
//       <h2>please login</h2>
//     </Wrapper>
//     </>
//   )
// }

// function App(){
//   const [val,setVal]=useState("nishu jha")
//   return (
//     <div>
//       <h1>Get Input feild value</h1>
//       <input type="text" onChange={(event)=>setVal("event.target.value")} placeholder="Enter User name"/>
//       <h1>val</h1>
//       <button onClick={()=>setVal("")}>Clear value</button>
//     </div>
//   )
// }

// function App(){
//   const [name,setName]=useState('nishu');
//   const [password,setPassword]=useState('');
//   const [email,setEmail]=useState('');
//   return (
//     <div>
//       <h1>Controlled Component</h1>
//       <form action="" method="get">
//         <input type="text" value={name} onChange={()=>setName(event.target.value)} placeholder='Enter Name'/>
//         <br/><br/>
//         <input type="text" value={password} onChange={()=>setPassword(event.target.value)} placeholder='Enter Password'/>
//         <br/><br/>
//         <input type="text" value={email} onChange={()=>setEmail(event.target.value)} placeholder='Enter email'/>
//         <br/><br/>
//         <button>Submit</button>
//         <button onClick={()=>{setEmail("");setName('');setPassword('')}}>Clear</button>
//         <h3>{name}</h3>
//         <h3>{password}</h3>
//         <h3>{email}</h3>
//       </form>
//     </div>
//   )
// }

// function App(){
//   return (
//     <div>
//       <h1>handle checkboxes in js</h1>
//       <Skills/>
//     </div>
//   )
// }

// function App(){
//   return (
//     <div>
//       {/* <h1>handle dropdown and radio button</h1> */}
//       <Radio/>
//     </div>
//   )
// }

function App(){
  return (
    <div>
      <Loop/>
    </div>
  )
}

function Fruit(){
  return (
    <>
    <h1>Apple</h1>
    </>
  )
}

function Colors(){
  return (
    <h1>Red Color</h1>
  )
}

function sum(){
  return 10+10
}

export default App;