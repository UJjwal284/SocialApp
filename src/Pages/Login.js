import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {db} from "../Firebase";

function Login() {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = (event) => {
        event.preventDefault()
        db.ref('/users/' + id).set({
            Password: pass
        }).then(r => {

        })
    }

    return (
        <div>
            <form>
                <input className={'input-group w-25'} value={id} placeholder={"User Id"}
                       onChange={(e) => setId(e.target.value)}/>
                <input className={'input-group w-25'} value={pass}
                       onChange={(e) => setPass(e.target.value)} placeholder={"User Password"}/>
                <button className={'btn btn-primary'} onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
