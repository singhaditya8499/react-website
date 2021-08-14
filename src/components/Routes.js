import '../styles/Links.css'
import { Route, Router, Switch, useHistory } from 'react-router-dom';
import App from './App';
import Resume from './Resume';
import History from './History';
export default function Routes() {
    let history = useHistory();
    const redirectBlog = () => {
        history.push("https://www.google.com");
    }
    return (
        <Router history={History}>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/resume" exact component={Resume} />
            </Switch>
        </Router>
    )
}