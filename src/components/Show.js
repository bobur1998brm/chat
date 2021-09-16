import React, { useEffect, useState } from 'react'
import {firestore } from '../firebase'

function Show() {
    const [show, setShow] = useState([])
    useEffect( ()=>{
         firestore.collection('chat').onSnapshot(text=>{
            setShow(
                text.docs.map(item => ({
                    uniqueId: item.id,
                    data: item.data()
                }))
            )
        })
    },[])
    // console.log(show);
    return (
        <div>
            <h1>Show</h1>
            {
                show?.map((item, inx)=>(
                    <div key={inx}>
                        <p>{item.data.msg}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Show
