import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartQuantity from "./CartQuantity.jsx";

const CartSection = () => {
    const cart = useSelector(state => state.productsReducers.cart);
    console.log("cartSection", cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    return (
        <>
            <div className="cart-section">
                <div className="container">
                    <div className="row">
                        {
                            cart.map(items =>(
                                <CartQuantity key={items.id} items={items} />
                            ))
                        }
                        <div className="col-md-6 m-auto mt-4">
                            <div className="cart__summary">
                                <h4 className="summary__title mt-4">Cart Summary</h4>
                                <div className="summary__price mt-4 mb-3">
                                    <span>TOTAL: ({totalItems} items) - </span>
                                    <span>$ {totalPrice}</span>
                                </div>
                                <Link to="/checkout" className="summary__checkoutBtn">
                                  Proceed To Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartSection;