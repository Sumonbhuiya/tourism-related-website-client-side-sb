import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import initializeAuthenticatin from '../../Components/Firebase/Firebase.init';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

initializeAuthenticatin();
const auth = getAuth();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // user login form 
    const processLogin = event => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                history.push(redirect_url);
            })
            .catch((error) => {
                alert("Wrong information");
            });
    }

    // input sections 
    const handelEmail = event => {
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }

    const handelGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }


    return (
        <div className="display-image">
            <div className="p-5">
                <br /><br />
                {/* login form  */}
                <form className="row g-3" onSubmit={processLogin}>
                    <div className="col-12">
                        <input onChange={handelEmail} type="email" className="form-control control-input" id="inputAddress" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <input onChange={handelPassword} type="password" className="form-control control-input" id="inputAddress" placeholder="Password" required />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="form-control control-input btn-danger">log in</button>
                    </div>
                </form>
                <br />
                <p className="text-danger control-input p-3">New user? please <Link to="/register">Registration</Link></p>
                <div>---------------------</div>
                {/* different login method  */}
                <div className="col-12 p-4 text-center">
                    <button onClick={handelGoogleLogIn} className="btn btn-warning"><i className="fab fa-google fs-4 pe-2 pt-1 text-white"></i> Google Sign In</button>
                </div><br /><br /><br />
            </div>
        </div >
    );
};

export default Login;