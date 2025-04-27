import React from 'react';

function ContactItem(props) {
  return (
    <li>
      <p>{props.number}. {props.contact.name} - {props.contact.email}</p>
      <button onClick={() => props.deleteContact(props.contact.id)}>Delete</button>
    </li>
  );
}

export default ContactItem;