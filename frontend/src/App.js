import logo from './logo.svg';
import Login from './pages/Login/Login_page';
import Home from './pages/Home/Home';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
