import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';


const Navbar = () => {

    const [arrow, setArrow]= useState(false);

    function setFun(){
        setArrow(!arrow);
        
    }

    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light my-navbar">
                <a class="navbar-brand" href="#">Swiflearn</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link" href="#"><div>Live Consultation [<i class="fas fa-circle dot"></i>]</div></a>
                        <a class="nav-item nav-link" href="#">Buy Plans</a>
                        <a class="nav-item nav-link" href="#">View Plans</a>
                        <button className="btn btn-large log-in" onClick={setFun}>Log In</button>
                    </div>
                </div>
                { arrow && <Login />}
                </nav>
        </div>
    )
}

export default Navbar;
