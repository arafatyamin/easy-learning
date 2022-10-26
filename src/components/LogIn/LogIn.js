import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {

    const {providerLogIn} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  w-1/2">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        </div>
                        <div className="flex justify-center">
                        <button onClick={handleGoogleSignIn} className='text-2xl mr-4'><FaGoogle /></button>
                        <button className='text-2xl mr-4'><FaGithub></FaGithub></button>
                        </div>
                        <div className="form-control mt-6">
                        
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;