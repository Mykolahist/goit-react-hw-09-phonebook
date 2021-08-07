import { useDispatch, useSelector } from 'react-redux';

import {
  phonebookSelectors,
  phonebookOperations,
  findContacts,
} from '../../redux/phonebook';
import AddContact from '../../components/AddContact/AddContact';
import ContactsList from '../../components/ContactsList/ContactsList';
import FindContacts from '../../components/FindContacts/FindContacts';
import style from './Contacts-view.module.css';

export default function Contacts() {
  const dispatch = useDispatch();

  const filter = useSelector(phonebookSelectors.getFilter);

  return (
    <>
      <h1 className={style.title}>Phonebook</h1>
      <AddContact />
      <FindContacts value={filter} onChange={dispatch(findContacts(filter))} />
      <ContactsList onClick={dispatch(phonebookOperations.deleteContact())} />
    </>
  );
}
