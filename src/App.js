import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
let isFirstRender=true;

function App() {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  // const itemList=useSelector((state)=>state.cart.itemList)
  const cart=useSelector((state)=>state.cart);
const dispatch=useDispatch();
const notification=useSelector((state)=>state.ui.notification)
  
  useEffect(()=>{
    if(isFirstRender){
      isFirstRender=false;
      return;
    }
    const sendRequest=async()=>{
      dispatch(uiActions.showNotification({
        open:true,
        message:"sending request to the server",
        type:'warning'
      }))
      const response=await fetch("https://redux-http-ajit-default-rtdb.firebaseio.com/cartItems.json",{
        method:'PUT',
        body:JSON.stringify(cart)
      })
      const data=response.json();
      dispatch(uiActions.showNotification({
        open:true,
        message:'send request successfully',
        type:'success'
      }))
    }
     sendRequest().catch(err=>{
      dispatch(uiActions.showNotification({
        open:true,
        message:'sending request faild',
        type:'error'
      }))
     }) 
  },[cart])
 
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}></Notification>}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
