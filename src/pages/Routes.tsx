import {
    BrowserRouter as Router,
    Routes as ReactRouterRoutes,
    Route,
} from 'react-router-dom';
import Main from './Main';

const Routes = () => {
    return (
        <Router>
            <ReactRouterRoutes>
                <Route path="/" element={<Main />} />
            </ReactRouterRoutes>
        </Router>
    );
};

export default Routes;
