import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { Contacts } from './ContactsList.styled';

const ContactsList = ({ items, deleteContact }) => {
    return (
        <Contacts> 
        {items.map(({ id, name, number }) => (
      <ContactItem 
      key={id}
      id={id}
      name={name}
      number={number}
      deleteContact={deleteContact}
      />      
))}
</Contacts>
);
};

export default ContactsList;

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,   
    })
  ),
  deleteContact: PropTypes.func,
};