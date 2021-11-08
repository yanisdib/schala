import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from '../App';
import { Header } from '../components';
import OutfitPage from '../components/Pages/OutfitPage/OutfitPage';

function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route component={App} path="/" exact />
                    <Route component={OutfitPage} path="/outfit" />
                </Switch>
            </main>
        </Router>
    );
}

export default AppRouter;