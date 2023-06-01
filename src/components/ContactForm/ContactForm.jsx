import shortid from 'shortid';
import PropTypes from 'prop-types';
import { FormData, ButtonSubmit, FormInput, Message } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';

export const ContactForm = ({ onFormSubmit }) => {
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
    
    const initialValues = {
        name: '',
        number: '',
    };

const  handleSubmit = (values, { resetForm }) => {
    onFormSubmit(values);
        resetForm();
};

        return (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <FormData>
            <label htmlFor={nameInputId}>
              Name
              </label>
              <ErrorMessage name="name" component={Message} />
                 <FormInput
                   type="text"
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                   id={nameInputId}
                />
             <label htmlFor={numberInputId}>
              Number
              </label>
              <ErrorMessage name="number" component={Message} />
                 <FormInput
                   type="tel"
                   name="number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                   id={numberInputId}
                  />
                 <ButtonSubmit type="submit">Add Contact</ButtonSubmit>
          </FormData>    
          </Formik>    
        );
  };

  ContactForm.propTypes = {
    onFormSubmit: PropTypes.func, 
  };

      