import { useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';

export default function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const contactsList = useSelector(phonebookSelectors.getVisibleContacts);
  const isLoading = useSelector(phonebookSelectors.getIsLoading);

  return (
    <>
      {contactsList &&
        contactsList.map(item => (
          <li className={style.item}>
            <span className={style.contact}>
              {item.name}: {item.number}
            </span>
            <button
              className={style.list__button}
              onClick={() =>
                dispatch(phonebookOperations.deleteContact(item.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      {isLoading && <h2>Loading...</h2>}
    </>
  );
}

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
