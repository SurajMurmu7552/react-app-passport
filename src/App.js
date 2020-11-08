import React ,{ Component } from 'react'
import './App.css';



export class App extends Component {
  state={
      apiResponse:""
  }

  onSubmit=()=>{
    fetch('api/user').then(res => res.json()).then(res => console.log(res.data));
  }

  render() {
      return (
        <a href='/facebook'><button type='submit' onSubmit={this.onSubmit}>log in with facebook</button></a>
      )
  }
}

export default App;
