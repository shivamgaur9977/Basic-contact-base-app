import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export default function SearchBar({setShowContactPage, allResult, allContacts, setAllResult}) {
    

    let handleInput = (event) => {
        let query = event.target.value;
        if (query == "") {
            setAllResult(allContacts);
        }else {
            let searchResult = allResult.filter((contact) => contact.name.toLowerCase().includes(query));
            setAllResult(searchResult);
        }
    }

    let renderAddContactPage = () => {
        setShowContactPage(false);
    }

    return (
        <div className='top-elements'>
            <input placeholder="Search Contact" onChange={handleInput}/>
            <AddIcon className='plus' onClick={renderAddContactPage}/>
        </div> 
    )
}