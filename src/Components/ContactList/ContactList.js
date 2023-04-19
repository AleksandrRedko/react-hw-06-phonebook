import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteContact } from "../../redux/sliceContacts";
import s from "./ContactsList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const getVisibleContactsList = () => {
    const normolizedFilter = filter.request.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };
  const visibleContacts = getVisibleContactsList();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
