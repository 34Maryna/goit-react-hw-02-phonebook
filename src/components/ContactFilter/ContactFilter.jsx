import shortid from 'shortid';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './ContactFilter.styled';

const filterId = shortid.generate();

export const ContactFilter = ({ filter, onChange }) => {
    return (
        <>
<FilterLabel htmlFor={filterId}>
<span>Find contacts by name</span>
</FilterLabel>
<FilterInput 
type="text"
id={filterId}
value={filter}
onChange={onChange}
/>
</>
    );
};

ContactFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}