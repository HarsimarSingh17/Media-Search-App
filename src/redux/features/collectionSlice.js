import { createSlice } from "@reduxjs/toolkit";
import {toast, Zoom} from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
};

const collectionSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {
        addToCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            );

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));
            }
        },
        removeFromCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items));
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addToast: () => {
            toast.success('Added To Collection :)', {
                position: "bottom-right",
                autoClose: 12,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    }
});

export const { addToCollection, removeFromCollection, clearCollection, addToast } = collectionSlice.actions;
export default collectionSlice.reducer;