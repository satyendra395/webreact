import React from "react";

export default class Home extends React.Component{
    constructor(props){
        super();
        this.age = props.age;
        this.state = {
            age : props.initialAge,
            status: 0,
            homeLink: 'changeLink',
            
        }

        setTimeout(() =>{
            this.setState({
                status: this.state.status + 1
            })
        },1000)
    }
    
    

    componentWillMount(){
        console.log("component will mount");//onload
    }

    componentDidMount(){
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("component will receive props", nextProps)//when props and state recieve
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should component update", nextProps, nextState)
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("component will update", nextProps, nextState)
    }

    componentDidUpdate(previousProps, previousState){
        console.log("component did update", previousState, previousState);
    }

    componentWillUnmount(){
        console.log("component will recieve");
    }

    clickMe(){
        this.setState ({
            age: this.state.age + 3
        })
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
        console.log(this.state.homeLink);
    }

    render(){
               return(
            <div>
                <h1>Your name is:- {this.props.name}</h1>
                <h1>Your age is :-{this.state.age}</h1>
                <ul style={{"color":"red"}}> user object:- {this.props.user.Hobbies.map((hobby) => <li>{hobby}</li>)}</ul>
                <h3>Your status is: {this.state.status}</h3>
                <h3>{this.props.homeLink}</h3>
                <button onClick={()=>this.clickMe()} style={{"height":100, "width":100, "color":"blue"}}>click me</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)}>click on this</button>
            </div>
        )
    }
}
