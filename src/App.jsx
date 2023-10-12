import { useState , useEffect } from 'react'
import ContactList from './components/ContactList.jsx'
//import { dummyContacts } from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact'

import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId]=useState(null);
  //use state
  // const [state, function]=useState(initialValue)
  //{color:red, id:3,isSelected:false}
  // {setSelectedContactId}
  

  console.log("Contacts: ", contacts);

  return (
    <>
      {selectedContactId?
        // (<SelectedContact setSelectedContactId={selectedContactId}/>):(< ContactList setSelectedContactId={setSelectedContactId} />)
        (<SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>):(< ContactList setSelectedContactId={setSelectedContactId} />)
        
      } 
      
    </>
  )
}

export default App
