import React from 'react';
import ContactItem from './contactItem';

function ContactList(props) {
  return (
    <div>
      <h2>Contacts</h2>
        <ul>
          {props.contacts.map((contact, index) => (
            <ContactItem
              key={contact.id}
              number={index + 1}
              contact={contact}
              deleteContact={props.deleteContact}
            />
          ))}
        </ul>
    </div>
  );
}

export default ContactList;