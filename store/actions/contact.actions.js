import { contactService } from "../../services/contact.service.js"
import { SET_CONTACTS } from "../reducers/contact.reducer.js"
import { store } from "../store.js"


export function loadContacts() {

    return contactService.query()
        .then(contacts => {
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('contact action-> cannot load contacts', err)
            throw err
        })
}



