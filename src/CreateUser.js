import react, { useState } from 'react'


function CreateUser()
{
   
    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    const makeUser = ()=>{
        let data = {name,age}
        console.warn("called",data);
    }
    return(<>
    <h1>Make a new user</h1>
    <br/>
    <input type="text" 
    name="UserName" 
    onChange={(e)=>setName(e.target.value)} 
    value={name} 
    placeholder="Enter name"/>
    <br/>
    <br/>
    <input type="text" 
    name="age" 
    onChange={(e)=>setAge(e.target.value)} 
    value={age} 
    placeholder="Enter age"/>
    <br/>
    <br/>
    <button onClick={makeUser} >Create user</button>

    </>)
}

export default CreateUser;