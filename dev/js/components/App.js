import React from 'react';
import Home from './Home';
import Header from './Header';

export default class App extends React.Component{
    render(){
        var users = {
            Hobbies: ['dancing', 'eating']
        };
        return(
            <div>
                Test
                <Home name={"shrangali"} initialAge={24} user = {users} status={0}/>
                <Header/>
            </div>
        );
    }
}
