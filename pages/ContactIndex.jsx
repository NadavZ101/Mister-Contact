const { useEffect } = React
const { Link } = ReactRouterDOM
const { useSelector, useDispatch } = ReactRedux

import { contactService } from "../services/contact.service.js"
import { ContactList } from "../cmp/ContactList.jsx"
import { loadContacts } from "../store/actions/contact.actions.js"

export function ContactIndex() {

    const contacts = useSelector(storeState => storeState.contactModule.contacts)
    console.log("🚀 ~ ContactIndex ~ contacts:", contacts)


    useEffect(() => {
        loadContacts()
            .catch(err => {
                console.log('Cannot load contacts')
            })
    }, [])

    function onRemoveContact(contactId) {
        console.log("🚀 ~ onRemoveContact ~ contactId:", contactId)
        console.log('YYY')

    }
    if (!contacts) return <div>Is Loading...</div>
    return (
        <div>
            <h3>Contacts App</h3>
            <main>
                <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />

                {(!contacts.length) && <div>No contacts to show...</div>}
            </main>
        </div>
    )
}