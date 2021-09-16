import React, { useState, useEffect } from 'react'
import './Chat.css'
import {auth, firestore} from "../../firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollectionData} from 'react-firebase-hooks/firestore'
import firebase  from 'firebase'


function Chat() {
    const [value, setValue] = useState('')
    const [user] =  useAuthState(auth);
    const [show, setShow] = useState([])
    // const [chat, loading] = useCollectionData(
    //     // firestore.collection("chat").orderBy("createAt")
    // );
    const addText =  (e)=>{
        e.preventDefault();
        if(value === ""){
            return alert("Biror nima yozing")
        }
        firestore.collection("chat").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
    const removeItem = (id)=>{
        // e.stopPropagation();
        console.log(id);
        firebase.firestore().collection('chat').doc(id).delete()
        .then(()=>{console.log("successfully deleted! ")})
        .catch((error)=>{ console.log("Error removing document:", error)})
    }
        useEffect(  ()=>{
            firestore.collection('chat').orderBy("createAt").onSnapshot( text =>{
            setShow (
                text.docs.map(item => ({
                    uniqueId: item.id,
                    data: item.data()
                }))
            )
        })
    },[])
    return (
        <div className='chat'>
            <div className="sidebar">
                <h1>B R M - Chat</h1>
                <button onClick={()=> auth.signOut()}>Log out</button>

                {/* <img src={auth.currentUser.photoURL} alt="" />
                <h2>{auth.currentUser.displayName}</h2> */}
            </div>
            <div className="chat_container">
                <div className="chat_section">
                    {
                        show?.map((item, inx)=>(
                            <div onDoubleClick={()=> removeItem(item.uniqueId)} className={user.uid===item.data.uid?"msg currentUser" : "msg" }  key={inx}>
                                <img src={item.data.photoURL} alt="" />
                                <div>
                                    <h3>{item.data.displayName}</h3>
                                    <p>{item.data.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="chat_inputContainer">
                   <form onSubmit={addText}>
                        <input className="chat_input" type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
                        <button onClick={addText}>Send</button>
                   </form>
                </div>
            </div>
        </div>
    )
}

export default Chat
