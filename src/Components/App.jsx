import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";

export default function App() {
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
