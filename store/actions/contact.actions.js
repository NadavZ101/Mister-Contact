import { contactService } from "../../services/contact.service.js"
import { SET_CONTACTS } from "../reducers/contact.reducer.js"
import { store } from "../store.js"


export function loadContacts() {
    console.log("🚀 Actions! ~ loadContacts ~ contacts:")

    return contactService.query()
        .then(contacts => {
            contacts
            console.log("🚀 ~ loadContacts ~ contacts:", contacts)

            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('contact action-> cannot load contacts', err)
            throw err
        })
}

store.subscribe(() => {
    console.log('----- Store State changed: ----')
    console.log(store.getState())
    console.log('-------------------------------')
})



