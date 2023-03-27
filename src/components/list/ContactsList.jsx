import { ContactsList, ContactsItem, ContactsTitle, DeleteButton } from "./ContactsList.styled" 
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteContacts } from '../../redux/contacts';
import { nanoid } from 'nanoid';

export const ContactsListRender = () => {
    const contacts = useSelector(state => state.contacts);
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();

    function onDelete(index) {
        dispatch(setDeleteContacts(index));
    }
    function hendleFind() {
        const normalizedFilter = filters.toLowerCase();
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
        );
    }

    const contactsData = hendleFind();
    return (
        <ContactsList>
            {contactsData.map(({ name, number }, index) => (
            <ContactsItem key={nanoid()}>
                <ContactsTitle>{name}</ContactsTitle>
                <ContactsTitle>{number}</ContactsTitle>
                <DeleteButton onClick={() => onDelete(index)} key={index}>
                Delete
                </DeleteButton>
            </ContactsItem>
            ))}
        </ContactsList>
        );

};

