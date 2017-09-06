import React from 'react';
import Home from './Home';
import Header from './Header';

export default class App extends React.Component{
    constructor(){
        super();
        this.state= {
            homeLink: "Home",
            homeMountain: true

        }

    }

    click(){
        alert("hello");
    }

    onChangeMountain(){
        this.setState({
            homeMountain: !homeMountain
        })
    }

    onChangeLink(newName){
        this.setState ({
            homeLink: newName

        })
    }

    onHandlerEvent(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    render(){
        var users = {
            Hobbies: ['dancing', 'eating']
        };

        let homeCmp = '';
        if(this.state.homeMountain){
            homeCmp = (<Home name={"shrangali"} 
                initialAge={24} 
                user = {users} 
                status={0} 
                greek={this.click} 
                homeLink={this.state.homeLink}
                changeLink={this.onChangeLink.bind(this)}/>
                )
        }
        return(
            <div>
                Test
                {homeCmp}
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandlerEvent(event)}/>
            </div>
        );
    }
}
