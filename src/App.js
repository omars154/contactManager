import React, { useState } from 'react';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(id)); //This is not working yet (Didn't know how to make it)
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
