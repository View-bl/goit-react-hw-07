import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";
import { FiTrash2 } from "react-icons/fi";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {phone}
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={styles.button}
          >
            <FiTrash2 className={styles.icon} />
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
