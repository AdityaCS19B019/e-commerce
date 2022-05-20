import logo from './logo.svg';
import './App.css';
import Land_page from './components/Land_page';
import Cart_page from './components/Cart_page'
import Nav_bar from './components/Nav_bar';
import Product_page from './pages/product'
import Product_listing from './pages/products'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (

    <Router>

      <Switch>
              <Route  path= "/login" component = {Login}/>
              <Route  path= "/register" component = {Register}/>
              <Route  path = "/" component = {Home}/>

      </Switch>

    </Router>
   
  );
}

export default App;
