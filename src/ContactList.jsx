import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ContactList({allResult, setAllResult}) {
    let [Name, setName] = useState();
    let [Number, setNumber] = useState();
    let [editPage, setEditPage] = useState(false);
    let [ID, setID] = useState();


    let contactEdit =(event) => {
        if(event.target.name=='name') {
            setName(event.target.value);
        }else {
            setNumber(event.target.value);
        }
    }

    let editContact = (id) => {
        setEditPage(true);
        setID(id);
        let oldContact = allResult.filter((contact => contact.id == id))
        setName(oldContact[0].name);
        setNumber(oldContact[0].number);
    }

    let edit = (ID) => {
        setAllResult(allResult.map((contact) => {
            if(contact.id == ID) {
                return {...contact, name: Name, number: Number}
            }else {
                return contact;
            }
        }))
        setEditPage(false);
    }

    let deleteContact = (id) => {
        let toDisplayContact = allResult.filter((contact) => contact.id != id);
        setAllResult(toDisplayContact);
    } 

    return(
        <div className='show-contacts'>
            {editPage ? 
                <div>
                    <input value={Name} name='name' onChange={contactEdit}/>
                    <input value={Number} name='number' onChange={contactEdit}/>
                    <button onClick={() => edit(ID)}>Edit</button>
                </div>:
            allResult.map((contact, idx) => 
                <div className='contact-details' key={contact.id}>
                    <div className='icon'>
                        <AccountCircleIcon className='contact-icon'/>
                        <div>
                            <h4>{contact.name}</h4>
                            <p>{contact.number}</p>
                        </div>
                    </div>
                    <div className='edit-delete'>
                        <EditIcon onClick={() => editContact(contact.id)} className='edit'></EditIcon>
                        <DeleteIcon onClick={() => deleteContact(contact.id)} className='delete'></DeleteIcon>
                    </div>
                </div>
            )
            }
        </div>
    )
}