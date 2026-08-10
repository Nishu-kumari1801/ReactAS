import { useState } from "react";

function Radio(){
    const [gender,setGender] = useState("female");
    const [city,setCity] = useState('Patna');

    return(
        <div>
            <h1>Handle Radio and Dropdown</h1>
            <h4>select gender</h4>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender=='male'} id="male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=='female'} id="female"/>
            <label htmlFor="female">Female</label>
            <h2>Selected Gender:{gender}</h2>
            <br/><br/>
            <h4>Select City</h4>
            <select onChange={(event)=>setCity(event.target.value)}defaultValue={"patna"}>
                <option value="noida">Noida</option>
                <option value="nagpur">Nagpur</option>
                <option value="patna">Patna</option>
            </select>
            <h2>selected city : {city}</h2>
        </div>
    )
}
export default Radio;