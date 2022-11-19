import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { Wrap } from "./App.styled"
import { useDispatch, useSelector } from "react-redux"
import { selectError, selectIsLoading } from "redux/contacts/selectors"
import { useEffect } from "react"
import { fetchContacts } from "redux/contacts/operations"
  

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch])
  
  return (
    <Wrap>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <div>
      {isLoading && !error && <b>Request in progress...</b>}
      </div>
        <ContactList />
      </div>
      </Wrap>)
}