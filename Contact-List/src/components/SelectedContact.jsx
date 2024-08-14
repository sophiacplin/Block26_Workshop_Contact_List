import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}){
const [contact, setContact] = useState(null);

useEffect(() => {
  async function fetchSingleContact(){
    
    try{
      const request = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
      const response = await request.json();
      setContact(response);
      console.log(contact);
      
    }catch(err){
      console.error(err);
    }
  }
  fetchSingleContact();
}, []);

return(
<ul>
      <li key = {contact.id} contact={contact}>{contact.name}</li>
      <li key={contact.id} contact={contact}>{contact.email}</li>
      <li key= {contact.id} contact={contact}>{contact.phone}</li>
</ul>
);
 
}