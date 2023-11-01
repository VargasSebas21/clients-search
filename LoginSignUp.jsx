import React from 'react';
import { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/shrek.png';
import password_icon from '../Assets/pswrd.png';
import { useNavigate, Routes } from 'react-router-dom';


const MyComponent = () => {

    const [action] = useState('Login');

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
                <div className="inputs">
                <div className="input">
                    <img className='shrek' src={user_icon} alt="user_icon_image" />
                    <input type="text" placeholder='User Name' />
                </div>
            <div className="input">
                <img className='password_icon' src={password_icon} alt="password_icon" />
                <input type="password"  placeholder='Password'/>
            </div>
            </div>
            
            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
        </div>
    );
};

export default MyComponent;
