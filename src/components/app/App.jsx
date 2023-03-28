import { ContactsListRender } from "../list/ContactsList"; 
import { ContactsForm } from "components/form/ContactsForm";
import { Filter } from "components/filter/Filter";
import{AppContainer, Title} from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { getLoading, getError, getContacts } from 'redux/selectors';

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactsForm />
        <Title>Contacts</Title>
        <Filter />
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactsListRender />}
      </AppContainer>
    );
  }