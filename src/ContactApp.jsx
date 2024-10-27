import { useState } from 'react';

import './ContactApp.css';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import AddContactPage from './AddContactPage';
import uuid from 'react-uuid';

export default function ContactApp() {
    let [allContacts, setAllContacts] = useState([
        {name:'Shivam', number: '7489824268', id: uuid()},
        {name: 'Darshan', number: '9977222650', id: uuid()}
    ]);
    let [showContactPage, setShowContactPage] = useState(true);
    let [allResult, setAllResult] = useState();

    if(allResult == undefined || null) {
        setAllResult(allContacts);
    }

    return (
        <div className='contact-app'> 
            {showContactPage ? 
                <div>
                    <div className='img-heading'>
                        <img src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'/>
                        <h2>React Contact App</h2>
                    </div>
                    <SearchBar setAllContacts={setAllContacts} allContacts={allContacts} allResult={allResult} setAllResult={setAllResult} setShowContactPage={setShowContactPage}></SearchBar>
                    <ContactList setAllResult={setAllResult} allResult={allResult}></ContactList>
                </div> :
                <AddContactPage setAllResult={setAllResult} setShowContactPage={setShowContactPage} setAllContacts={setAllContacts}></AddContactPage>
            }
        </div>
    )
}