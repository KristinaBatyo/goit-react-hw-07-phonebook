import { ContactsContainer, ContactsLabel, ContactsButton, ContactsInput} from './ContactsForm.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';


export const  ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

        
        function hendleChange (e) {
            const { name, value } = e.currentTarget;
                switch (name) {
                    case 'name':
                    setName(value);
                    break;
                    case 'number':
                    setNumber(value);
                    break;
                    default:
                    return;
                }
        }
        function hendleSubmit(event) {
            event.preventDefault();
            if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase()
            )
            ) {
            return alert(`${name} is already in contacts.`);
            }
            dispatch(addContacts({ name, number }));
            reset();
        }

        function reset() {
        setName('');
        setNumber('');
        }

        return (
          <ContactsContainer onSubmit={hendleSubmit}>
            <ContactsLabel>
              Name
              <ContactsInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={hendleChange}
                value={name}
                id={nanoid()}
              />
            </ContactsLabel>
            <ContactsLabel>
              Number
              <ContactsInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={hendleChange}
              />
            </ContactsLabel>
            <ContactsButton type="submit">Add Contact</ContactsButton>
          </ContactsContainer>
        );
        }
