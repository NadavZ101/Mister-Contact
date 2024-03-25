const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

import { contactService } from "../services/contact.service.js"


export function ContactDetails() {

    const params = useParams()
    const navigate = useNavigate()
    const [currContact, setCurrContact] = useState(null)

    useEffect(() => {
        const { id } = params
        contactService.getContactById(id)
            .then(contact => {
                if (!contact) return navigate('/contact')
                currContact(contact)
            })
            .catch(() => {
                console.log('Cannot load todo')
            })
    }, [])


    if (!contact) return <h4>Loading...</h4>
    const { _id, name, phone, address, city } = currContact
    return (
        <div className="contact-details flex">
            <div className="contact-data-container">
                <h1>Name: {name}</h1>
                <h2>Phone: {phone}</h2>
                <h2>Address {address}</h2>
                <h2>City {city}</h2>

                <button className="back-btn" onClick={() => navigate('/contact')}>
                    Back to contact's list
                </button>
            </div>

        </div>
    )

}