import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        itemList:[],
        totalQuantity:0,
        showCart:false
    },reducers:{
        addToCart(state,actions){
            const newItem=actions.payload;
            const existingItem=state.itemList.find((item)=>item.id===newItem.id)

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+=newItem.price;
            }else{
                state.itemList.push({
                    id:newItem.id,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    quantity:1,
                    name:newItem.name,

                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state,actions){
            const id=actions.payload;
            const existingItem=state.itemList.find((item)=>item.id ===id);
            if(existingItem.quantity===1){
                 state.itemList=state.itemList.filter((item)=>item.id !==id)
            }else{
                existingItem.quantity--;
                state.totalQuantity--;
                existingItem.totalPrice-=existingItem.price;
                
            }
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        }

    }
})

export const cartActions=cartSlice.actions;

export default cartSlice;