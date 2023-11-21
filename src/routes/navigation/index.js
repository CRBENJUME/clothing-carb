import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../context/user";
import {NavigationContainer, LogoContainer, NavLink, NavLinks} from './style.js'
import CartIcon from "../../components/cart-Icon/cartIndex";
import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../../components/cart-dropdown/cartD"
import { CartContext } from "../../context/CardCon";

export default function Navigation () {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                               { ' ' } SIGN OUT { ' ' }
                            </NavLink>
                        ) 
                        : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}