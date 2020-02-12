import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from "reactstrap";
  

class GithubCard extends React.Component {
constructor(props){
    super(props)
    this.state = {
    bool:false
    }
}
render(){
        return(
            <div>   
                <Card>
                <CardImg
                    top
                    width="100%"
                    src={this.props.user.avatar_url}
                    alt="Card image"
                />
                <CardBody>
                    <CardTitle>{this.props.user.login}</CardTitle>
                    {/* <CardSubtitle>{this.props.user.name}</CardSubtitle>
                    <CardText>{this.props.user.followers}</CardText> */}
                    {/* //if this.state.bool is true---do map else null */}
                    
                    {this.state.bool ? this.props.followers.map(item => (
                        <CardSubtitle>{item.login}</CardSubtitle>
                        ))
                    : null}
                    {/* //bool: !this.state.bool (means toggling; bool is NOT this.state.bool) */}
                    <Button onClick={() => this.setState({ bool: !this.state.bool })}>
                    See my followers
                    </Button>
                </CardBody>
                </Card>
        
            </div>
        )
    }
}

export default GithubCard;