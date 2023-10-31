import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems=useSelector((state)=>state.cart.itemList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          {
           cartItems.length>0 ?  cartItems.map((item)=>{
              return(
                <li key={item.id}>
                       <CartItem id={item.id} price={item.price} total={item.totalPrice} quantity={item.quantity} name={item.name} />
                </li>
              )
            }): <li>no data</li>
          }
      </ul>
    </div>
  );
};

export default CartItems;
