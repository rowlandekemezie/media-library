import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <div className="text-center">
            <nav className="navbar navbar-default">
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="images" activeClassName="active">Images</Link>
                {" | "}
                <Link to="about" activeClassName="active">About</Link>
                {" | "}
                <Link to="Contact" activeClassName="active">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;