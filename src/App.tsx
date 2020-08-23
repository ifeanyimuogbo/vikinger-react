import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {} from './routes/protectedroutes';
import pageurl from './routes/url/pageurl';
import ProfileTimeline from './pages/profile-timeline/ProfileTimeline';
import HomePage from './pages/homepage/homepage';
import NavBar from './components/Navbar/navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={pageurl.HOME_PAGE} component={HomePage} />
        <Route
          exact
          path={pageurl.PROFILE_TIMELINE}
          component={ProfileTimeline}
        />
        {/* <Route path="*" component={Page404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
