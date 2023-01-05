import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors.js';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem.jsx';
import { List } from './ContactList.styled.js';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(' It is filter in LIst: ', filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <List>
      {filter
        ? visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))
        : contacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
    </List>
  );
};
