import React, {useState } from 'react';
import { Link } from "react-router-dom";
import "../asserts/scss/Model.scss";
import Navbar from './Navbar';

const Login = () => {

    const [formData, setFormData] = useState({
        email:'',
        password: ''
    });

    const {
        email, password
    } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    
    const [check, setCheck] = useState(true);

    const handleClick = () =>{
        setCheck(!check);
       
    }

    return (
        <div>
        { check &&
        <div className="modal-primary-container">
            <div className="modal-primary search-modal">
            <button className="modal-close-button" aria-label="close button" onClick={handleClick}> 
                   <i className="fas fa-times"></i>
                </button>
            <form className="login-form">
                    <div className="navbar-brand">Swiflearn</div>
                    <h3 className="heading2">Login Into Your Account </h3>
                    <div className="form-group">
                        <label>Email id</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            placeholder="Enter your username"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-large btn-primary Loginbutton" >Login</button>
            
                    

                <p className="my-1">
                Don't have an account? <Link to="/register" className="endbtn">Sign Up</Link>
                </p>
                </form>
            </div>
           </div> }
        </div>
    )
}

export default Login;
