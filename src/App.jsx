import { useState , useEffect } from 'react'
import ContactList from './components/ContactList.jsx'
import { dummyContacts } from './components/ContactList.jsx'
import ContactRow from './components/ContactRow.jsx'

import './App.css'

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts: ", contacts);

  return (
    <>
      < ContactList />
    </>
  )
}

export default App
