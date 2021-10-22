import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from '../App';

function AppRouter() {
    return (
        <Router>
            <main>
                <Switch>
                    <Route component={App} path="/" exact />
                </Switch>
            </main>
        </Router>
    );
}

export default AppRouter;