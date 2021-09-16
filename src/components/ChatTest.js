import React, { useState } from 'react'
import {firestore} from '../firebase'

function ChatTest() {
    const [value, setValue] = useState('')
    const addChat = ()=>{
        firestore.collection("chat").add({msg : value})
        setValue('')
    }
    return (
        <div>
            <h1>Chat</h1>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            <button onClick={addChat}>Send</button>
        </div>
    )
}

export default ChatTest
