// import Axios from 'axios';
import React ,{ Component } from 'react'
import {BrowserRouter as Router , Redirect, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';



export class App extends Component {



  // storeData=(e)=>{
  //   e.preventDefault();
  //   console.log('running')
  //   fetch('/api/user',{
  //     credentials:"include"
  //   })
  //   .then(res => res.json())
  //   .then(console.log('running'))
  //   .then(res => console.log(res.displayName))
  //   .then(res => this.setState({ apiResponse: res.displayName}));
  // }

  // getData= async()=>{
  //     const response = await fetch('/api/user',{
  //       credentials:"include"
  //     });
  //     const data =await response.json();
  //     console.log(data.displayName)
  //     this.setState({apiResponse : data})
  // }



  render() {
      return (
        <Router>
          <Route exact path="/"><a href='/facebook'><button onClick={this.onSubmit}>log in with facebook</button></a></Route>
          <Route path="/loggedin">
            {/* {this.state.authenticated ? <Dashboard /> : <Redirect to ='/' />} */}
            <Dashboard />
          </Route>
        </Router>
      )
  }
}

export default App;
