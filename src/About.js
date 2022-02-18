import React from "react";
class About extends React.Component{
    constructor(){
        super()
        // this.state={
        //     name:"Rohit",
        //     age:27
        // }
    }
    componentDidMount()
    {
        console.warn("props ", this.props.name);
        // console.warn("did mount");
    }

    componentDidUpdate()
    {
         alert("name updated ")
    }
    render(){
        console.warn("render");
        return(<div>
            <h1>this is the about page </h1>
            <h2>{this.props.name}</h2>
            {/* <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <button onClick={()=>{this.setState({name:"rohit jaiswal"})}}>update state</button> */}
        </div>)
    }
}

export default About;