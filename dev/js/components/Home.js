import React from "react";

export default class Home extends React.Component{
    constructor(props){
        super();
        this.age = props.age;
        this.state = {
            age : props.initialAge,
            status: 0
        }

        setTimeout(() =>{
            this.setState({
                status:this.state.status + 1
            })
        },1000)
    }

    clickMe(){
        this.setState ({
            age: this.state.age + 3
        })
    }

    render(){
        return(
            <div>
                <h1>Your name is:- {this.props.name}</h1>
                <h1>Your age is :-{this.state.age}</h1>
                <ul style={{"color":"red"}}> user object:- {this.props.user.Hobbies.map((hobby) => <li>{hobby}</li>)}</ul>
                <h3>Your status is: {this.state.status}</h3>
                <button onClick={()=>this.clickMe()} style={{"height":100, "width":100, "color":"blue"}}>click me</button>
            </div>
        )
    }
}
