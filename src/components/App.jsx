import React from 'react';
import shortid from 'shortid';

import { ContactForm } from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import Section from './Section/Section';
import { ContactTitle } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

 formSubmitHandler = data => {
  const { name, number } = data;
  const newContact = {
     id: shortid.generate(),
     name,
     number,
  };

for (const contact of this.state.contacts) {
  if (newContact.name === contact.name) {
    alert(`${newContact.name} is already in contacts`);
     return;
  }
}

this.setState(curState => {
   return { contacts: [newContact, ...curState.contacts] };
});
 };

 changeFilter = event => {
  this.setState({ filter: event.currentTarget.value });
};

deleteContact = contactId => {
  this.setState(curState => ({
    contacts: curState.contacts.filter(contact => {
      return contact.id !== contactId;
    }),
  }));
};

getVisibleContacts = () => {
  const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
  );
};

render() {
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();
  
  return (
    <Section title="PhoneBook">
    <ContactForm
    onSubmit={this.formSubmitHandler} />
    <ContactTitle>Contacts</ContactTitle>   
<ContactFilter filter={filter} onChange={this.changeFilter}/>
<ContactsList 
items={visibleContacts}
deleteContact={this.deleteContact}/>
</Section>
);
}
}