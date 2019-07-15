import React from 'react';
import store, {SET_STUDENT} from './store';

import './App.css';

 class AppWithRedux extends React.Component {
 

  render(){
    
    return (
      <div className="App">
        <UserProfile  />
        <UserName />
      </div>
    );

  }

}


function UserProfile(props){
  return <div>
    <UserHeading  />
    <UserName />
  </div>
}

function UserHeading(props){
  return <div>
    <UserCard />
    <UserName />
  </div>
}

function UserCard(props) {
  return <div> 
       <UserName />
  </div>
}

class UserName extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            store: store.getState()
        };
    }
componentDidMount(){
    store.subscribe(() => {
        this.setState({
            store: store.getState()
        })
    })
}

updateStudent(){
    store.dispatch({
        payload: {name: "WITH REDUX", age: "TODAY"},
        type: SET_STUDENT
    })
}
render(){
    const {age, name} = this.state.store.user
    return (
        
        <div>
            <span>{age}</span>
            <span>{name}</span>
            <button onClick={() => this.updateStudent()}>Click Me</button>
        </div>
    )
}
 
  
}
export default AppWithRedux;
