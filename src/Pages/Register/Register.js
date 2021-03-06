import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeAuthenticatin from '../../Components/Firebase/Firebase.init';

initializeAuthenticatin();
const auth = getAuth();

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // registration form 
    const handelRegistration = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                history.push(redirect_url);
                setError('');
                setNewProfile();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setNewProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    // input sections 
    const handelNameChange = event => {
        setName(event.target.value);
    }
    const handelEmail = event => {
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }
    return (
        <div className="display-image">
            <div className="p-5 control-form">
                <br /><br />
                <form className="row g-3" onSubmit={handelRegistration}>
                    <div className="col-12">
                        <input onChange={handelNameChange} type="text" className="form-control control-input" id="inputAddress" placeholder="Name" required />
                    </div>
                    <div className="col-12">
                        <input onBlur={handelEmail} type="email" className="form-control control-input" id="inputAddress" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <input onBlur={handelPassword} type="password" className="form-control control-input" id="inputAddress" placeholder="Password" required />
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <div className="col-12">
                        <button type="submit" className="form-control control-input btn-danger">Registration</button>
                    </div>
                </form>
                <p className="text-danger control-input p-3">Already have an account? <Link to="/login">Login</Link></p>
                <br /><br /><br />
            </div>
        </div>
    );
};

export default Register;