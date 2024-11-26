import { createSlice } from "@reduxjs/toolkit"

const WishlistSlice = createSlice({
    name: "Wishlist",
    initialState: {
        Wishlist: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.Wishlist.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            state.Wishlist=state.Wishlist.filter(item=>item.id!=action.payload)
        }

    }
})
export const { addToWishlist,removeFromWishlist } = WishlistSlice.actions
export default WishlistSlice.reducer