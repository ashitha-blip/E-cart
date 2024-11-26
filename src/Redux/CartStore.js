import { configureStore } from "@reduxjs/toolkit"
import ProductSlice from "./Slice/ProductSlice"
import WishlistSlice from "./Slice/WishlistSlice"
import CartSlice from "./Slice/CartSlice";

const cartStore = configureStore({
    reducer: {
        productReducer: ProductSlice,
        WishListReducer: WishlistSlice,
        cartReducer:CartSlice,
    },
});
export default cartStore