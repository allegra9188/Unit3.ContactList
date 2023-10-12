import { useEffect,useState } from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact]=useState(null)

    useEffect(()=>{
        async function fetchSingleUser(){
            try {
                const response= await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result=await response.json();
                console.log(result)
                setContact(result)
                //console.log(contact)
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleUser()
    },[selectedContactId])
    // render here
    return (
        <div>
            <button className="but"onClick={()=>{setSelectedContactId(null)}}>
                Back to List
            </button>
            
            <table>
                <tbody>
                    <tr>
                        <td>{contact?.name}</td>
                        <td>{contact?.email}</td>
                        <td>{contact?.phone}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
        
        
    )
}
