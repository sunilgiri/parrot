import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import App from './app';
import HomePage from './containers/Home';
import NotFound from './containers/NotFound';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';
import ProjectsPage from './containers/Projects';
import ProjectPage from './containers/Project';
import NewProjectPage from './containers/NewProject';
import LocalePage from './containers/Locale';
import EditLocalePage from './containers/EditLocale';

function Root({history, store}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} name="Home">
                    <IndexRoute component={HomePage} />
                    <Route path="login" component={LoginPage} name="Login" />
                    <Route path="register" component={RegisterPage} name="Register" />
                    <Route path="projects" name="Projects" >
                        <IndexRoute component={ProjectsPage} />
                        <Route path="new" component={NewProjectPage} name="New Project" />
                        <Route path=":projectId" >
                            <IndexRoute component={ProjectPage} />
                            <Route path="locales" name="Locales" >
                                <Route path=":localeId">
                                    <IndexRoute component={LocalePage} />
                                    <Route path="edit" component={EditLocalePage} name="Edit" />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    history: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
};

export default Root;