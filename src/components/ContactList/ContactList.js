import { FriendList, FriendItem, Button, Wrap, Item } from "./ContactList.styled"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectStatusFilter } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";

const getVisibleContact = (contacts, statusFilters) => {
    
    
    if (statusFilters === undefined) {
        statusFilters =''
    } 
    return contacts.items.filter(contact => contact.name.toLowerCase().includes(statusFilters.value));
    
      } 

export const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const statusFilter = useSelector(selectStatusFilter);
    const visibleContacts = getVisibleContact(contacts, statusFilter);
    const dispatch = useDispatch();
    


        return(<FriendList>
        {visibleContacts.map(({ id, name, number }) => 
        {
            const handleDelete = () => dispatch(deleteContact(id));
            return (
            <FriendItem key={id}>
                <Wrap>
                <Item>{name}</Item>
                <Item>{number}</Item>
                </Wrap>
                <Button
                    type="button"
                    onClick={handleDelete}>Delete
                </Button>
                </FriendItem>
            )}
        )}
    </FriendList>)
}


FriendList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
}