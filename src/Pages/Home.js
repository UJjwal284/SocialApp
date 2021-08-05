import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {db} from "../Firebase";
import $ from 'jquery'
import Messages from "../Components/Messages";

function Home() {
    const currentUserId = sessionStorage.getItem('currentUserId')
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");
    const [otherUserId, setOtherUserId] = useState("");


    const handleSearch = (event) => {
        event.preventDefault()
        db.ref('users/' + id).once("value", snapshot => {
            if (snapshot.exists()) {
                $('.chatBox').show()
                setOtherUserId(id)
                setMessage(" ")
            } else {
                alert('User not Found')
            }
        })
    }

    const handleSend = (event) => {
        const time = Date.now()
        event.preventDefault()
        db.ref('/users/' + currentUserId + '/Chats/' + otherUserId + '/' + time).set({
            Message: message,
            By: currentUserId
        })
        db.ref('/users/' + otherUserId + '/Chats/' + currentUserId + '/' + time).set({
            Message: message,
            By: currentUserId
        })
    }

    return (
        <>
            <form>
                <input placeholder={'Enter User Id'} value={id} onChange={(e) => setId(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </form>
            <div className={'bg-danger navB'}>
                <p className={'mb-0'}>{otherUserId}</p>
            </div>
            <div className={'chatBox bg-warning'}>
                <Messages id={otherUserId}/>
                <form>
                    <input placeholder={'Type message'} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button className={'bottom-0'} onClick={handleSend}>Send</button>
                </form>
            </div>
        </>
    );
}

export default Home;
