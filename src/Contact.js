import react , {useEffect,useState} from "react";
// now here we are going to use how we are used the hook with the function component
// now we are going to update age 
function Contact(props)
{
    const [val,setVal]=useState("rohit")
    const test= (e )=>{
        console.warn("hellow on click",e.target.value);
        setVal(e.target.value)
        
    }
     
    return(<div>
        <h2>contact us </h2>
        <input type="text" value={val} onChange={test}></input>
        <button onClick={()=>{alert(val)}}>Click me </button>
       
      
        
    </div>)

}

export default Contact;