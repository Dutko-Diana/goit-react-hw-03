import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contact}>
            <Contact contact={contact} handleDelete={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
}
