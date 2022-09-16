import {
    BrowserRouter as Router,
    Routes as ReactRouterRoutes,
    Route,
} from 'react-router-dom';

import Main from './Main';
import AboutTeam from './AboutTeam';
import { PageWithLayout } from './PageWithLayout';
import Search from './Search';

const Routes = () => {
    return (
        <Router>
            <ReactRouterRoutes>
                <Route element={<PageWithLayout />}>
                    <Route index element={<Main />} />
                    <Route path="/about-team" element={<AboutTeam />} />
                    <Route path="/search" element={<Search />} />
                </Route>
            </ReactRouterRoutes>
        </Router>
    );
};

export default Routes;
