import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
// import CartItems from "./CartItems";
const Layout = () => {
  let total =0;
const showCart=useSelector((state)=>state.cart.showCart)
const itemList=useSelector((state)=>state.cart.itemList)

itemList.forEach((item)=>{
  total+=item.totalPrice;
})
console.log(itemList)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {/* { showCart && <CartItems/>} */}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
