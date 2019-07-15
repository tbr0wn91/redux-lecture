import React from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        name: "josh",
        age: 31
      }
    }
  }

  render(){
    const { user } = this.state;
    return (
      <div className="App">
        <UserProfile user={user} />
      </div>
    );

  }

}


function UserProfile(props){
  return <div>
    <UserHeading user={props.user} />
  </div>
}

function UserHeading(props){
  return <div>
    <UserCard user={props.user}/>
  </div>
}

function UserCard(props) {
  return <div>
    <UserName user={props.user} />
  </div>
}

function UserName(props){
  return <div>
    <span>{props.user.name}</span>
    <span>{props.user.age}</span>
  </div>
  
}
export default App;
