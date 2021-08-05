import './Main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./Pages/Login";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
