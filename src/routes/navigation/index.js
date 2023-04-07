import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../context/user";
import './style.css'
import CartIcon from "../../components/cart-Icon/cartIndex";
import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../../components/cart-dropdown/cartD"
import { CartContext } from "../../context/CardCon";

export default function Navigation () {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>
                               { ' ' } SIGN OUT { ' ' }
                            </span>
                        ) 
                        : (
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet/>
        </Fragment>
    )
}