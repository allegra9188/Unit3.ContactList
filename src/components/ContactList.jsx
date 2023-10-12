import { useState,useEffect } from "react";
import ContactRow from './ContactRow.jsx'

// export const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//   ];
  //console.log(dummyContacts)



export default function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);   
    //create another useState, storing contact id

    // give it an empty [] as second parameter so it doesn't re-run because second parameter don't change
    useEffect(()=>{
      async function fetchContacts(){
        try {
          //
          const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
          const result = await response.json();
          //console.log(result)
          //const json = result.data
          setContacts(result);
          
        } catch (error) {
          console.error(error)
        }
      }
      
      fetchContacts()
      //console.log(contacts)
    },[])

    return (
        <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {
             // Map over data here
             contacts.map((contact) => {
                return <ContactRow setSelectedContactId={setSelectedContactId} key={contact.id} contact={contact} />
             })
           }
        </tbody>
      </table>
    )
}
