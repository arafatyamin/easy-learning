import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL)
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    }

    return (
        <div>
            <form  onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  w-1/2">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="photourl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover text-lg flex">You have a account?<p className="text-info">LogIn</p> </Link>
                        </label>
                        </div>
                        {
                            error ? <p className='text-red-600'>email already in use</p> : <p></p> 
                        }
                        <div className="form-control mt-6">
                        
                        <button className="btn btn-primary">Register
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;