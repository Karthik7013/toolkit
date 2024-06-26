import { createSlice, configureStore } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        alert: {
            type: 'success',
            message: 'this is working',
            state: true
        }
    },
    reducers: {
        getProducts(state, action) {
            state.products = action.payload
        }
    }
});

export const actions = productSlice.actions;
const store = configureStore({
    reducer: productSlice.reducer
})

export default store;