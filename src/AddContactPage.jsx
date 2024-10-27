import { useState } from "react"
import uuid from "react-uuid";

export default function AddContactPage ({setAllResult, setShowContactPage, setAllContacts}) {
    let [newContact, setNewContact] = useState({});

    let handleInput = (event) => {
        if(event.target.name == 'name'){
            setNewContact((preData) => {
                return {
                    ...preData, name: event.target.value
                }
            });
        }else {
            setNewContact((preData) => {
                return {
                    ...preData, number: event.target.value
                };
            })
        }
        setNewContact((preData)=> {
            return {
                ...preData, id: uuid()
            }
        })
    }

    let addContact = () => {
        setAllResult((allContacts) => {
            return [
                ...allContacts, newContact
            ]
        })
        setShowContactPage(true);
    }

    return (
        <div className='add-contact-page'>
            <div className='input-element'>
                <input onChange={handleInput} name='name' placeholder='Name'/>
                <input onChange={handleInput} name='number' placeholder='Number'/>
            </div>
            <div>
                <button className='add' onClick={addContact}>Add</button>
            </div>
        </div>
    )
}