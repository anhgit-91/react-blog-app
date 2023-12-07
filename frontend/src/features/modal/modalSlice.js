import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignUpVisible: false,
    isSignInVisible: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            // action.payload should be "signUp" or "signIn"
            const modalType = action.payload;

            // Toggle the visibility of the specified modal
            state[
                `${modalType === "signUp" ? "isSignUp" : "isSignIn"}Visible`
            ] =
                !state[
                    `${modalType === "signUp" ? "isSignUp" : "isSignIn"}Visible`
                ];
        },
    },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
