import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignInVisible: false,
    currentPage: "signIn",
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleSignIn: (state) => {
            state.isSignInVisible = !state.isSignInVisible;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { toggleSignIn, changePage } = modalSlice.actions;

export default modalSlice.reducer;
