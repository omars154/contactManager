import React, { useState } from "react";

function ContactForm (props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newContact = { name, email };

    props.addContact(newContact);
    setName("");
    setEmail("");
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type="submit">add contacts</button>
    </form>
  );
}

export default ContactForm;
