import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import ErrorBoundary from './ErrorBoundary';
import AccelerometerListPage from './AccelerometerListPage';
import DrawbarListPage from './DrawbarListPage';
import SpringListPage from './SpringListPage';
import SteerListPage from './SteerListPage';
import Contact from './contact_us';
import AccelerometerDetail from './AccelerometerDetail';
import DrawbarDetail from './DrawbarDetail';
import SpringDetail from './SpringDetail';
import SteerDetail from './SteerDetail';

import DrawbarS1112 from './DrawbarS1112';
import DrawbarS1113 from './DrawbarS1113';
import DrawbarS1114 from './DrawbarS1114';
import DrawbarS1115 from './DrawbarS1115';
import DrawbarS1116 from './DrawbarS1116';
import DrawbarS1117 from './DrawbarS1117';

import SpringS1121 from './SpringS1121';
import SpringS1122 from './SpringS1122';
import SpringS1123 from './SpringS1123';
import SpringS1124 from './SpringS1124';
import SpringS1125 from './SpringS1125';
import SpringS1126 from './SpringS1126';


import AccelerometerS1111 from './AccelerometerS1111';
import AccelerometerS2222 from './AccelerometerS2222';
import AccelerometerS3333 from './AccelerometerS3333';
import AccelerometerS1234 from './AccelerometerS1234';
import AccelerometerS1235 from './AccelerometerS1235';
import AccelerometerS1236 from './AccelerometerS1236';


import SteerS1212 from './SteerS1212';
import SteerS1313 from './SteerS1313';
import SteerS1414 from './SteerS1414';
import SteerS1515 from './SteerS1515';
import SteerS1616 from './SteerS1616';
import SteerS1717 from './SteerS1717';


export default function Dashboard() {

  return (
       <ErrorBoundary>
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/accelerometers1111">
           <AccelerometerS1111 />
           </Route>

           <Route path="/accelerometers2222">
           <AccelerometerS2222 />
           </Route>

           <Route path="/accelerometers3333">
           <AccelerometerS3333 />
           </Route>

           <Route path="/accelerometers1234">
           <AccelerometerS1234 />
           </Route>

           <Route path="/accelerometers1235">
           <AccelerometerS1235 />
           </Route>

           <Route path="/accelerometers1111">
           <AccelerometerS1111 />
           </Route>

           <Route path="/accelerometers1236">
           <AccelerometerS1236 />
           </Route>

          <Route path="/accelerometerdetail">
           <AccelerometerDetail />
           </Route>

          <Route path="/accelerometer">
            <AccelerometerListPage />
          </Route>

          <Route path="/drawbars1112">
           <DrawbarS1112 />
           </Route>

           <Route path="/drawbars1113">
           <DrawbarS1113 />
           </Route>

           <Route path="/drawbars1114">
           <DrawbarS1114 />
           </Route>

           <Route path="/drawbars1115">
           <DrawbarS1115 />
           </Route>

           <Route path="/drawbars1116">
           <DrawbarS1116 />
           </Route>

           <Route path="/drawbars1117">
           <DrawbarS1117 />
           </Route>

          <Route path="/drawbardetail">
            <DrawbarDetail/>
          </Route>

          <Route path="/instrumented-drawbar">
            <DrawbarListPage/>
          </Route>

          <Route path="/springdetail">
            <SpringDetail/>
          </Route>

          <Route path="/springs1121">
            <SpringS1121/>
          </Route>

          <Route path="/springs1122">
            <SpringS1122/>
          </Route>

          <Route path="/springs1123">
            <SpringS1123/>
          </Route>

          <Route path="/springs1124">
            <SpringS1124/>
          </Route>

          <Route path="/springs1125">
            <SpringS1125/>
          </Route>

          <Route path="/springs1126">
            <SpringS1126/>
          </Route>


          <Route path="/suspension-string">
            <SpringListPage/>
          </Route>

          <Route path="/steers1212">
            <SteerS1212/>
          </Route>

          <Route path="/steers1313">
            <SteerS1313/>
          </Route>
          
          <Route path="/steers1414">
            <SteerS1414/>
          </Route>

          <Route path="/steers1515">
            <SteerS1515/>
          </Route>

          <Route path="/steers1616">
            <SteerS1616/>
          </Route>

          <Route path="/steers1717">
            <SteerS1717/>
          </Route>

          <Route path="/steerdetail">
            <SteerDetail/>
          </Route>

          <Route path="/steer-sensor">
            <SteerListPage/>
          </Route>

          <Route path="/contact-us">
            <Contact/>
          </Route>

          <Redirect path="/" to="/home" />

        </Switch>
       </ErrorBoundary>
  );
}

