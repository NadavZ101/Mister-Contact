const { useEffect } = React
const { Link } = ReactRouterDOM
const { useSelector, useDispatch } = ReactRedux

import { contactService } from "../services/contact.service.js"

export function ContactIndex() {

    useEffect(() => {
        loadContacts()
            .catch(err => {
                console.log('Cannot load contacts')
            })
    }, [])

    function onRemoveContact(contactId) {
        console.log("🚀 ~ onRemoveContact ~ contactId:", contactId)

    }

    return (
        <div>
            <h3>Contacts App</h3>
            <main>
                <ContactList onRemoveContact={onRemoveContact} />

                {(!contacts.length) && <div>No contacts to show...</div>}
            </main>
        </div>
    )
}