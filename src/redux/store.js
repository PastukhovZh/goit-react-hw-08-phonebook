import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contacts/contactsSlice";
import { filtersReducer } from "./contacts/filtersSlise";






export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filters: filtersReducer, 
        
    },
});