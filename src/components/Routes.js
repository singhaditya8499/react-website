import '../styles/Links.css'
import { Route, Router, Switch } from 'react-router-dom';
import App from './App';
import History from './History';
import About from './About';
export default function Routes() {
    return (
        <Router history={History}>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/resume" exact component={() =>{
                    window.location.href = "https://bit.ly/08adi04";
                    return null;
                }} />
                <Route path="/about" exact component={About}/>
            </Switch>
        </Router>
    )
}