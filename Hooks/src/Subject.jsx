import { SubjectContext } from "./ContextData"
import { useContext } from "react"

export default function Subject(){
    const Subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor:'red',padding:10}}>
            <h1>Subject is : {Subject}</h1>
        </div>
    )
}