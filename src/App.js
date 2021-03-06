import './Main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./Pages/Login";
import Home from "./Pages/Home";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
