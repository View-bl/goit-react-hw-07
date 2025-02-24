import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ContactList.module.css";
import { FiTrash2 } from "react-icons/fi";

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

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
