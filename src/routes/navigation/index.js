import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import './style.css'

export default function Navigation () {
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo/>
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}