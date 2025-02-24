import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "./redux/contactsSlice";
import { setFilterName } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Loader from "./components/Loader/Loader";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilterName(e.target.value));
  };

  return (
    <div className="container">
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter value={contacts.name} onChange={handleFilterChange} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList contacts={contacts} />
    </div>
  );
}
