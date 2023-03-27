import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutStart } from "../../store/user/user.action";

import { ReactComponent as KingLogo } from "../../assets/king.svg";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <KingLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
