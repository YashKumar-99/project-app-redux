import { createSlice } from "@reduxjs/toolkit";

import data from "../data";
const initialState = {
    cartItems: data,
    amount: 0,
    total: 0,
    isloading: true,
    ADD_Details: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            const ProductId = action.payload;
            var findObj = state.cartItems.find((item) => item.id === ProductId);
            console.log(findObj.amount, "findObjAmount")
            if (findObj.amount < 1) {
                const { id, title } = findObj;
                findObj.amount += 1;
                state.amount = state.amount + 1;
                var findObj = state.cartItems.find((item) => item.id === ProductId);
                alert("The Item is succesfully added in Your Cart !!");

                console.log(state.ADD_Details, "ddd")
                state.ADD_Details = [...state.ADD_Details, { ...findObj }]

            } else {
                alert("This item is already added in the cart...")
            }
        },

        Increment: (state, action) => {
            const ProductId = action.payload;
            const cartItem = state.ADD_Details.find((item) => item.id === ProductId);
            cartItem.amount += 1;
            console.log(cartItem.amount)
        },
        Decriment: (state, action) => {
            const ProductId = action.payload;
            const cartItem = state.ADD_Details.find((item) => item.id === ProductId);

            if (cartItem.amount > 1) {
                cartItem.amount -= 1;

            }
        },
        totalAmount: (state, action) => {
            let sumPrice = state.ADD_Details.map((item) => parseFloat(item.price) * item.amount)

            let sum = sumPrice.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0);



            state.total = sum;
            console.log(sum, "gggg")
        },
        RemoveItem: (state, action) => {
            const ProductID = action.payload;
            state.ADD_Details = state.ADD_Details.filter((item) => item.id !== ProductID);
            state.amount -= 1;



            state.cartItems = state.cartItems.map((item) => {
                if (item.id === ProductID) {

                    console.log(item.amount, "itemAmout", item.id)

                    console.log(item);
                    item.amount -= 1;
                    // return item.amount - 1;

                    console.log(item.amount, "ggg")
                    return item;
                }
                return item;


            })


            console.log(state.cartItems, "stateCartitems")

        }
    }
})

export const { AddToCart, Increment, Decriment, totalAmount, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;



