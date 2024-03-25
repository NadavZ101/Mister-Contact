
export function ContactPreview({ contact, onRemoveContact }) {

    function removeContact(contactId) {
        onRemoveContact(contactId)
    }

    return <section className="contact-preview">
        <h3>Name: {contact.name}</h3>
        <h3>Phone: {contact.phone}</h3>
        <h3>Address: {contact.address}</h3>
        <h3>City: {contact.city}</h3>

        <button className="btn" onClick={() => removeContact(contact._id)}></button>

    </section>
}
