import logo from './logo.svg';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Search from './pages/Search/Search'
import NotFound from './pages/NotFound/NotFound'
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Register from './pages/Auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route path="/movie/:id" component={MovieDetails}/>
          <Route path='/search/:q?' component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
