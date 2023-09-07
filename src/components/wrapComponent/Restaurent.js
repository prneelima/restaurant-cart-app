import React from 'react';
import Menu from '../baseComponents/Menu';
import Cart from '../baseComponents/Cart';
import {useSelector} from 'react-redux';

const Restaurent = () => {
    const cartItems = useSelector(state => state.rest.cartItems);
    return(
        <div>
            <Menu />
            {cartItems.length > 0 && <Cart />}
        </div>
    )
}

export default Restaurent;