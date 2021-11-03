import logo from './logo.svg';
import Contact from './Components/Contact';
import Education from './Components/Education';
import LandingPage from './Components/LandingPage';
import Preview from "./Components/Preview"
import SamplePreview from './Components/SamplePreview';
import WorkHistory from './Components/WorkHistory';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,Switch,Link
 } from 'react-router-dom';
import Store from "./Store"
function App() {
  return (
    <div className="App">
      <Router>
<Switch>

      <Provider store={Store}>
<Route path="/" exact component={LandingPage}></Route>
<Route path="/contact" exact component={Contact}></Route>
<Route path="/education" exact component={Education}></Route>
<Route exact path="/preview" component={SamplePreview}></Route>
<Route exact path="/workhistory" component={WorkHistory}></Route>
      {/* <Contact></Contact> */}
      </Provider>
</Switch>
      </Router>
    </div>
  );
}

export default App;
