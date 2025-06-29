import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import showPwdImg from '../../assets/images/eyeIcon.svg'
import hidePwdImg from '../../assets/images/eyeoffIcon.svg';
import './Login.scss'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();

        console.log("Logging in with" + email, password);

        if (email === '' || password === '') {
            alert("Please Enter Email and Password");
            return;
        }
        else {
            navigate('/')
        }

    }

    return (
        <>
            <div className='login-wrapper'>
                <div className='login-form-wrapper'>
                    <div className='heading-wrapper'>
                        <h2>Sign In</h2>
                        <p>Enter your details to login to your account</p>
                    </div>
                    <form onSubmit={HandleSubmit}>
                        <div className='field-wrapper'>
                            <label>Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='field-wrapper'>
                        <label>Password</label>
                        <div className='pass-wrapper'>
                            <input
                                type={isRevealPwd ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <img alt='password'
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                            />

                        </div>
                    </div>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default LoginPage;