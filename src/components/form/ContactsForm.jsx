import { ContactsContainer, ContactsLabel, ContactsButton, ContactsInput} from './ContactsForm.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusContacts } from '../../redux/contacts';
import { setStatusName } from '../../redux/name';
import { setStatusNumber } from '../../redux/number';
import { nanoid } from 'nanoid';

export const  ContactsForm = () => {
        const contacts = useSelector(state => state.contacts);
        const name = useSelector(state => state.name);
        const number = useSelector(state => state.number);
        const dispatch = useDispatch();
        
        function hendleChange (e) {
            const { name, value } = e.currentTarget;
                switch (name) {
                    case 'name':
                    dispatch(setStatusName(value));
                    break;
                    case 'number':
                    dispatch(setStatusNumber(value));
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
            dispatch(setStatusContacts({ name, number }));
            reset();
        }

        function reset() {
            dispatch(setStatusName(''));
            dispatch(setStatusNumber(''));
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
                id={nanoid()}
                onChange={hendleChange}
                value={name}
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
