import PropTypes from 'prop-types';
import { ContactsItem } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, deleteContact }) => {
    return (
        <ContactsItem>
            {name}: {number}
            <button onClick={() => deleteContact(id)}>Delete</button>
        </ContactsItem>
    );
};

ContactItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,   
   deleteContact: PropTypes.func,
  };