import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
const User = (props) => {
    // console.log(props)
    const { url, name, email, phone, website, salary } = props.user;
    return (
        <div className="container"> 
            <div className="image">
                <img src={url} alt=""/>
                <br/>
                <button className="btn" onClick={ () => props.addUser(props.user)}> <FontAwesomeIcon icon={faUserPlus}/> add </button>
            </div>
            <div className="info">
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <h4>Salary: {salary}</h4>
            </div>
        </div>

    );
};

export default User;