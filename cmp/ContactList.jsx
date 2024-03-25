import { ContactPreview } from './ContactPreview.jsx'

const { Link } = ReactRouterDOM

export function ContactList({ contacts, onRemoveContact }) {

    return <section className="contact-list flex column">
        <button className="add-btn">
            {/* <Link to='/contact/edit'>Add Contact 📇</Link> */}
        </button>
        {/* <button className="add-btn" onClick={() => onAddTodo()}>New ToDo 📇</button> */}

        {contacts.map(contact => (
            <article className="contact-preview" key={contact._id}>
                <Link className="btn" to={`/contact/${contact._id}`}>
                    <ContactPreview contact={contact} onRemoveContact={onRemoveContact} />
                </Link>

            </article>
        ))
        }
    </section >
}