import logo from './logo.svg';
import Contact from './Components/Contact';
import Education from './Components/Education';
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
<Route path="/contact" exact component={Contact}></Route>
<Route exact path="/education" component={Education}></Route>
      {/* <Contact></Contact> */}
      </Provider>
</Switch>
      </Router>
    </div>
  );
}

export default App;
