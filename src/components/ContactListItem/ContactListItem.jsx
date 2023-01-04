import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { ListItem, Button } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const { name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      {name} : {number}
      <Button type="submit" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};
