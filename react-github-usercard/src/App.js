import React from 'react';
import axios from 'axios';
import GithubCard from './Components/GithubCard';
import Card from './Components/Card'
import Search from './Components/Search';
import './App.css';

class App extends React.Component{
constructor(props){
super(props)
  this.state = {
  user: {},
  followers:[],
  name:"Minakshi-Verma"
  }
}

changeUser = user => {
  this.setState ({name:user})
}

// getUser = () => {
//   axios
//     .get(`https://api.github.com/users/${this.state.name}`)
//     .then(res => this.setState({ user: res.data }))
//     .catch(err => console.error("ik err from axios call", err));
// };

// getFollowers = () => {
//   axios
//     .get(`https://api.github.com/users/${this.state.name}/followers`)
//     .then(res => this.setState({ followers: res.data }))
//     .catch(err => console.error("ik err from axios call", err));
// };

// componentDidMount() {
//   this.getFollowers();
//   this.getUser();
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.name !== this.state.name) {
//     this.getFollowers();
//     this.getUser();
//   }
// }

componentDidMount(){
    axios
    // axios call for usercard: use template literal to amke it dynamic instead of using your username
    .get(`https://api.github.com/users/${this.state.name}`)
    .then(res=>{
    // console.log("I am the response from axios", res.data)
      this.setState({
      user:res.data
    })
    })
    .catch(err =>{
      console.log("I am the error msg", err)
    })

    axios
    .get (`https://api.github.com/users/${this.state.name}/followers`)
    .then(res =>{
    // console.log("I am the response from followers API", res.data.followers)
      this.setState({
        followers: res.data
      })
    })
  .catch(err => {
    console.log ("I am the error from followers API", err)
  })
   
}


componentsDidUpdate(prevProps, prevState){
  if (prevState.name !== this.state.name) {
    this.componentDidMount()
  }
}

render(){
  // console.log("I am from render constructor", this.state)

    return(
      <div className ="App">
        <h2>My Github Card</h2>
        <Search changeUser = {this.changeUser} />
        <Card user = {this.state.user} followers ={this.state.followers}/>        
      </div>
    )
  }
}
export default App;
