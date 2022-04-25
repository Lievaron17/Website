import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
// import ErrorBoundary from './ErrorBoundary';
import AccelerometerListPage from './AccelerometerListPage';
import DrawbarListPage from './DrawbarListPage';
import SpringListPage from './SpringListPage';
import SteerListPage from './SteerListPage';
import Contact from './contact_us';
import AccelerometerDetail from './AccelerometerDetail';

export default function Dashboard() {

  return (
      // <ErrorBoundary>
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/accelerometerdetail">
           <AccelerometerDetail />
           </Route>

          <Route path="/accelerometer">
            <AccelerometerListPage />
          </Route>

          <Route path="/instrumented-drawbar">
            <DrawbarListPage/>
          </Route>
          
          <Route path="/suspension-string">
            <SpringListPage/>
          </Route>

          <Route path="/steer-sensor">
            <SteerListPage/>
          </Route>

          <Route path="/contact-us">
            <Contact/>
          </Route>

          <Redirect path="/" to="/home" />

        </Switch>
      // </ErrorBoundary>
  );
}

