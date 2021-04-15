import React, { Component } from 'react';

//Stateless Functional Components 

// pass the props object 
// In this case we don't need to use this.props.totalCounters 
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered '); 
    return (
            <nav className="navbar navbar-light bg-light">
 
                <a className="navbar-brand" href="#">                  
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
           </a>
            
            </nav>
        );

}

 
export default NavBar;

//Destructuring arguments 

//For example : We don't need to use props arguments all the time. 
// If you want to use LifeCycle Hook , You need to use class component. 