import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { adjustItemQty, removeFromCart } from "../store/action/productAddCartAction";

const CartQuantity = ({items}) => {
    const [input, setInput] = useState(items.qty);
    const dispatch = useDispatch();
    const adjustQty = (id, value) => {
        dispatch(adjustItemQty(id, value));
    };
    const onChangeHandler = (e) =>{
        setInput(e.target.value);
        adjustQty(items.id, e.target.value);
    };
    const deleteItem = (id) =>{
        dispatch(removeFromCart(id));
    };
    return (
        <>
            <div key={items.id} className="col-md-4 mt-4">
                <div className="img-div">
                    <img 
                        src={items.image} 
                        alt="" 
                    />
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <h2>{items.title}</h2>
                <h4>${items.price}</h4>
            </div>
            <div className="col-md-4 mt-4">
                <div className="cartItem__qty">
                    <label htmlFor="qty">Qty</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}   
                        onChange={onChangeHandler}                      
                    />
                    <button
                        className="actions__deleteItemBtn"
                        onClick={() =>deleteItem(items.id)}
                    >
                                              Delete Items
                    </button>
                </div>
                
            </div>
        </>
    );
};


CartQuantity.propTypes = {
    items: PropTypes.any
};

export default CartQuantity;