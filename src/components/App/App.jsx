import PropTypes from 'prop-types';
import { Container, Title, Subtitle } from './App.styled';
import { Form } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export function App() {
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
