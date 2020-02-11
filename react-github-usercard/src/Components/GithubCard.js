import React from 'react';

const GithubCard = (props) =>{



  return(
    <div>
        <h3>Name: {props.user.login}</h3>
        <p>Location: {props.user.location}</p>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>


    </div>
)


}

export default GithubCard;