import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {db} from "../Firebase";
import $ from 'jquery'
import Messages from "../Components/Messages";

function Home() {
    const currentUserId = sessionStorage.getItem('currentUserId')
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");

    //$('.chatBox').hide()

    const handleSearch = (event) => {
        event.preventDefault()
        db.ref('users/' + id).once("value", snapshot => {
            if (snapshot.exists()) {
                $('.chatBox').show()
            } else {
                alert('User not Found')
            }
        })
    }

    const handleSend = (event) => {
        const time = Date.now()
        event.preventDefault()
        db.ref('/users/' + currentUserId + '/Chats/' + id + '/' + time).set({
            Message: message,
            By: currentUserId
        })
    }

    return (
        <div>
            <form>
                <input placeholder={'Enter User Id'} value={id} onChange={(e) => setId(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </form>
            <div className={'chatBox bg-warning'}>
                <form>
                    <input placeholder={'Type message'} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button className={'bottom-0'} onClick={handleSend}>Send</button>
                </form>
                <Messages currentUserId={currentUserId} id={id}/>
            </div>
        </div>
    );
}

export default Home;
