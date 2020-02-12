import React from 'react';
import followerCard from './FollowerCard'

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        follower: []
        }
    }
    render(){
            return(
                <div>
                    <div className ="myCard">
                    <img
                        src={this.props.user.avatar_url}
                        alt="Card image"
                    />
                  
                        <h3>User: {this.props.user.login}</h3>
                    </div>
                        {/* <CardSubtitle>{this.props.user.name}</CardSubtitle>
                        <CardText>{this.props.user.followers}</CardText> */}
                        {/* //if this.state.bool is true---do map else null */}
                        <div className ="followerCard">
                        {this.props.followers.map(item => (
                            <div className ="follower"> 
                            <img className=" followerimg" src ={item.avatar_url}/>
                             <h2>{item.login}</h2>
                            </div>

                        ))}</div>

                            {/* // avatar = {item.avatar_url}
                            // login = {item.login}/>
                            )) */}
                     
                        {/* //bool: !this.state.bool (means toggling; bool is NOT this.state.bool) */}
                        {/* <Button onClick={() => this.setState({ bool: !this.state.bool })}>
                        See my followers
                        </Button> */}
                   
                    
            
                </div>
            )
        }
    }
    
    export default Card;