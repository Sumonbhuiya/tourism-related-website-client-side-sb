import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center pb-5 bg-light">
            {/* not found page  */}
            <img style={{ height: "100%", width: "100%" }} src="https://th.bing.com/th/id/R.7758c2970eb62912193b21ed24b457e8?rik=nTgzpqxR46UTAg&riu=http%3a%2f%2fwww.dehn-usa.com%2fsites%2fdefault%2ffiles%2fstyles%2fmarcom_image%2fpublic%2fmarcom%2fpage-not-found-404.jpg%3fitok%3dPDyTbwLj&ehk=jDG%2bJeCo6eNghteFBDCbkHeEOlt27Sk6LBmQt2okl38%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <p className="pb-5 fw-bold fs-3 text-danger">Page not found</p>
            <br />
            {/* home page link button  */}
            <div className="pb-5">
                <NavLink to="/home" className="text-decoration-none text-dark fs-4">Go to <button className="bg-dark text-white rounded">Home</button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;