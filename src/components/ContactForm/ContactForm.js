import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { Form, Label, Input, Button } from "./ContactForm.styled";


export const ContactForm = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            
            case 'number':
                setNumber(e.target.value)
                break;
        
            default:
                return;
        }
    }

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
        const handleSubmit = e => {
            e.preventDefault()
            const name = e.target.elements.name.value;
            const number = e.target.elements.number.value;
            const data = { name, number }
            contacts.items.find(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? alert(`${name} is already in contacts.`)
            :dispatch(addContact(data))  
            reset()
    }
    
    const reset = () => {
    setName('');
    setNumber('')
    }

    return (
         <>
         <Text padding='10px' fontSize='2xl' borderBottom='2mm ridge rgba(211, 220, 50, .6);'>Phonebook</Text>
            <Form onSubmit={handleSubmit}>
                <Label> <Text fontSize='large' >Name</Text>  
                    <Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label> <Text fontSize='large' >Number</Text>
                    <Input
                        onChange={handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit"> <Text fontSize='x-large' >Add friend</Text></Button>
                
        </Form>
        </>)
}