import {
    BrowserRouter as Router,
    Routes as ReactRouterRoutes,
    Route,
} from 'react-router-dom';

import Main from './Main';
import { PageWithLayout } from './PageWithLayout';

const Routes = () => {
    return (
        <Router>
            <ReactRouterRoutes>
                <Route element={<PageWithLayout />}>
                    <Route index element={<Main />} />
                </Route>
            </ReactRouterRoutes>
        </Router>
    );
};

export default Routes;
