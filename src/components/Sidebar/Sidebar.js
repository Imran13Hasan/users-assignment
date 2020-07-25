import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const sidebar = props.sidebar;

    // const salary = sidebar.reduce((salary, user) => salary + user.salary ,0)     //Or...

    let salary = 0;
    for (let i = 0; i < sidebar.length; i++) {
        const user = sidebar[i];
        salary = salary + user.salary;
    }

    return (
        <div className="sidebar">
            <h2>Person: {sidebar.length}</h2>
            <h2>Salary: {salary}</h2>
        </div>
    );
};

export default Sidebar;