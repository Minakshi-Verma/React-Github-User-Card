import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

    handleChange = e => {
        // this.setState({ [e.target.name]: e.target.value });
        this.setState({ username: e.target.value });
    };

    handleSubmit = e => {
    e.preventDefault()
    this.props.changeUser(this.state.username)
   
    }

    render(){
       
       
        return(
            <div>
                <Form onSubmit={this.handleSubmit} className="form">
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                        value={this.state.username}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username here"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
           

            </div>
        )
    }    
    
}

export default Search;