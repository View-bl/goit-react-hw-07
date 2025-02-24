import styles from "./Filter.module.css";
import { FiSearch } from "react-icons/fi";

export default function Filter({ value, onChange }) {
  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
        className={styles.input}
      />
      <FiSearch className={styles.icon} />
    </div>
  );
}
