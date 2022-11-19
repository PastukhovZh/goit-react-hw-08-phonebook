// import { ContactList } from "./ContactList/ContactList"
// import { ContactForm } from "./ContactForm/ContactForm"
// import { Filter } from "./Filter/Filter"
// import { Wrap } from "./App.styled"
// import { useDispatch, useSelector } from "react-redux"
// import { selectError, selectIsLoading } from "redux/contacts/selectors"
// import { useEffect } from "react"
// import { fetchContacts } from "redux/contacts/operations"
  

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading)
//   const error = useSelector(selectError)

//     useEffect(() => {
//     dispatch(fetchContacts())
//     }, [dispatch])
  
//   return (
//     <Wrap>
//       <ContactForm />
//       <div>
//         <h2>Contacts</h2>
//         <Filter />
//         <div>
//       {isLoading && !error && <b>Request in progress...</b>}
//       </div>
//         <ContactList />
//       </div>
//       </Wrap>)
// }
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
