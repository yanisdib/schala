import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import { Footer, Header } from '../components';
import { Outfit } from '../pages';


function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route component={App} path="/" exact />
                    <Route component={Outfit} path="/outfit" />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}


export default AppRouter;