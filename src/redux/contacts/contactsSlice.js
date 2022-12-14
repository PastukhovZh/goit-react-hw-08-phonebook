import {createSlice} from "@reduxjs/toolkit";
import { fetchContacts,addContact,deleteContact } from "../contacts/operations";


const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,

     extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    
  },
})

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.pending, (state, action) => state.isLoading = true)
//   .addCase(fetchContacts.fulfilled, (state, action)=> {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//   })
//       .addCase(fetchContacts.rejected, (state, action) => {
//       state.isLoading = false;
//   state.error = action.payload;
//       })
//         .addCase(addContact.pending, (state, action) => state.isLoading = true)
//   .addCase(addContact.fulfilled, (state, action)=> {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//   })
//       .addCase(addContact.rejected, (state, action) => {
//       state.isLoading = false;
//   state.error = action.payload;
//       })
//         .addCase(deleteContact.pending, (state, action) => state.isLoading = true)
//   .addCase(deleteContact.fulfilled, (state, action)=> {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     })
//       .addCase(deleteContact.rejected, (state, action) => {
//       state.isLoading = false;
//   state.error = action.payload;
//   })
//   },
// )



// export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducers = contactsSlice.reducer