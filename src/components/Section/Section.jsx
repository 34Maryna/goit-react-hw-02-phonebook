import PropTypes from 'prop-types';
import { PhonebookSection, PhonebookTitle } from './Section.styled';

const Section = ({title, children}) => {
    return (
<PhonebookSection>
    <PhonebookTitle>{title}</PhonebookTitle>
    {children}
</PhonebookSection>
    );
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
};