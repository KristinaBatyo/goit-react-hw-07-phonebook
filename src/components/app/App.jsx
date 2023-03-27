import { ContactsListRender } from "../list/ContactsList"; 
import { ContactsForm } from "components/form/ContactsForm";
import { Filter } from "components/filter/Filter";
import{AppContainer, Title} from './App.styled';

export const App = () =>  {
    return(

      <AppContainer>
      <Title>Phonebook</Title>
      <ContactsForm />
      <Title>Contacts</Title>
      <Filter/>
    <ContactsListRender/>
      </AppContainer>

    );
  }