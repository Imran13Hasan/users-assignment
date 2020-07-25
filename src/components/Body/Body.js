import React, { useState } from 'react';
import './Body.css';
import fakeData from '../../components/fakeData';
import User from '../User/User';
import Sidebar from '../Sidebar/Sidebar';


const Body = () => {
    // console.log(fakeData);
    const first14 = fakeData.slice(0, 14);
    const [user, setUser] = useState(first14);
    const [sidebar, setSidebar] = useState([]);

    const addUser = (user) => {
        // console.log("user added", user);
        const newSidebar = [...sidebar, user];
        setSidebar(newSidebar);
        // const salary = user.reduce((salary, user) => salary + user.salary, 0);
    }
    

    return (
        <div className="body">
            <div className="user-container">
                    {
                        user.map(user => <User user={user} addUser={addUser}></User>)
                    }
            </div>
            <div className="sidebar-container">
                <Sidebar sidebar={sidebar}></Sidebar>
            </div>
        </div>
    );
};

export default Body;