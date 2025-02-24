import { useSelector, useDispatch } from "react-redux";
import { selectFilterName, setFilterName } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";
import { FiSearch } from "react-icons/fi";

export default function Filter() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterName);

  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={filterName}
        onChange={(e) => dispatch(setFilterName(e.target.value))}
        placeholder="Search by name"
        className={styles.input}
      />
      <FiSearch className={styles.icon} />
    </div>
  );
}
