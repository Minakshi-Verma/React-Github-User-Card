import React from 'react';
import axios from 'axios';
import GithubCard from './Components/GithubCard'
import './App.css';

class App extends React.Component{
constructor(){
super()
this.state = {
user: '',
fpllowers: ''
}
}


componentDidMount(){
  axios
  // axios call for usercard
  .get(`https://api.github.com/users/Minakshi-Verma`)
  .then(res=>{
  console.log("I am the response from axios", res.data)
   this.setState({
    user: res.data
   })
  })
  .catch(err =>{
   console.log("I am the error msg", err)
  })

  //  //axios call for followers
  //  .get ('https://api.github.com/users/Minakshi-Verma/followers')
  //  .then(res =>{
  //    console.log("I am the response from followers API", res)
  //    this.setState({
  //     followers: res.data
  //   })

  //  })
  //  .catch(err => {
  //    console.log ("I am the error from followers API", err)
  //  })

}




// componentWillUpdate(prevProps, prevState){


// }

render(){

  return(
    <div className ="App">
      <h2>My Github Card</h2>
      <GithubCard user = {this.state.user}/>
    </div>
  )
}
}




export default App;
