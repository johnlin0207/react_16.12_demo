import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import User from './User';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

// function Home() {
//     const [isSending, setIsSending] = useState(false);
//     const [a, seta] = useState(1);
//     const history = useHistory();
//     const sendRequest = useCallback(async () => {
//         // don't send again while we are sending
//         if (!isSending) {history.push('/about');}
//     }, [a]); // update the callback if the state changes
//     return (
//         <div>
//             <label htmlFor="">
//                 <input type="text"/>
//                 <button onClick={sendRequest}>
//                     Click me
//                 </button>
//             </label>
//         </div>
//     );
// }

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <User/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
