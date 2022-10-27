import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || '/';

    const {providerLogIn, signIn} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignIn =()=>{
        providerLogIn(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            setError('');
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
        })
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  w-1/2">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"type="password" placeholder="password" className="input input-bordered" required/>
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover text-lg flex">you don't have account?<p className="text-info">Register</p> </Link>
                        </label>
                        </div>
                        
                        {
                            error ? <p className='text-red-600'>password wrong</p>: <p></p> 
                        }
                        <div className="form-control">
                        
                        <button className="btn btn-primary">Login</button>
                        <div className="flex justify-center mt-6">
                        <button onClick={handleGoogleSignIn} className='text-2xl mr-4'><FaGoogle /></button>
                        <button onClick={handleGithubSignIn} className='text-2xl mr-4'><FaGithub></FaGithub></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default LogIn;