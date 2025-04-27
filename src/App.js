import React, { useState } from 'react';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const delet = (id) => {
    setContacts(contacts.filter(id));
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={delet} />
    </div>
  );
}

export default App;