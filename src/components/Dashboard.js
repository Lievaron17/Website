import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import ErrorBoundary from './ErrorBoundary';
import AccelerometerListPage from './AccelerometerListPage';

export default function Dashboard() {

  return (
    // <Router>
      <ErrorBoundary>
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/accelerometer">
            <AccelerometerListPage />
          </Route>

          <Route path="/instrumental-drawbar">
            <h1>Hello from instrumental drawbar</h1>
          </Route>
          
          <Route path="/suspension-string">
            <h1>Hello from suspension string</h1>
          </Route>

          <Route path="/steer-sensor">
            <h1>Hello from steer sensor</h1>
          </Route>

          <Redirect path="/" to="/home" />

        </Switch>
      </ErrorBoundary>
    // </Router>
  );
}

