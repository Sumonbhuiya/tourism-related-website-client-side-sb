import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handelGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }


    return (
        <div className="">
            <div className="p-5 control-form">
                <br /><br />
                <form className="row g-3">
                    <div className="col-12">
                        <input type="email" className="form-control control-input" id="inputAddress" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <input type="password" className="form-control control-input" id="inputAddress" placeholder="Password" required />
                    </div>
                    <div className="row mb-3 text-danger"></div>
                    <div className="col-12">
                        <button type="submit" className="form-control control-input btn-danger">log in</button>
                    </div>
                </form>
                <div className="col-12 p-4 text-center">
                    <button onClick={handelGoogleLogIn} className="btn btn-warning"><i className="fab fa-google fs-4 pe-2 pt-1 text-white"></i> Google Sign In</button>
                </div>
                <br /><br /><br /><br />
            </div>
        </div >
    );
};

export default Login;