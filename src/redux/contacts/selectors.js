export const selectContacts = state => state.contacts;
export const selectStatusFilter = state => state.filters.filters;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error