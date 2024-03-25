import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const CONTACT_KEY = 'contactDB'

export const contactService = {
    query,
    save,
    remove,
    getContactById,
    getEmptyContact,
    getDefaultFilterBy,
}

//* Data Modal
const contact = {
    _id: '',
    name: '',
    phone: '',
    address: '',
    city: ''
}

_createContacts()

function query() {
    console.log('QUERYYYY')
    return storageService.query(CONTACT_KEY)
}

function remove(contactId) {
    return storageService.remove(CONTACT_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        contact.name = contact.name
        contact.phone = contact.phone
        contact.address = contact.address
        contact.city = contact.city

        return storageService.put(CONTACT_KEY, contact)

    } else {
        contact.name = contact.name
        contact.phone = contact.phone
        contact.address = contact.address
        contact.city = contact.city

        return storageService.post(CONTACT_KEY, contact)
    }
}

function getContactById(contactId) {
    return storageService.get(CONTACT_KEY, contactId)
}

function getEmptyContact() {
    return { _id: '', name: '', phone: '', address: '', city: '' }
}

function getDefaultFilterBy() {
    return { name: '', phone: '', address: '', city: '' }
}

function _createContacts() {
    let contacts = utilService.loadFromStorage(CONTACT_KEY)
    if (!contacts || !contacts.length) {
        contacts = []
        contacts.push(_createContact('Arik', '054-6252231', 'HaOrgim 22', 'London'))
        contacts.push(_createContact('Bentz', '052-3242781', 'Calaniot 77', 'Tel Aviv'))
        contacts.push(_createContact('Shaggy', '050-8242992', 'Rabin 8', 'Tokyo'))
        contacts.push(_createContact('Scooby', '053-9168325', 'Begin 12', 'Rome'))
    }
    utilService.saveToStorage(CONTACT_KEY, contacts)
}

function _createContact(name, phone, address, city) {
    const contact = {
        _id: utilService.makeId(),
        name: name || '',
        phone: phone || '',
        address: address || '',
        city: city || ''
    }

    return contact
}

