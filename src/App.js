import logo from './logo.svg';
import './App.css';
import Land_page from './components/Land_page';
import {Route} from 'react-router-dom';
import Cart_page from './components/Cart_page'
import Nav_bar from './components/Nav_bar';
import Product_page from './pages/product'
import Product_listing from './pages/products'

function App() {
  return (
    <div>
    <Nav_bar/>
    
    <Route path="/cart"><Cart_page/></Route>
    <Route path="/login"><Land_page/></Route>
    <Route path="/category/:categoryname"><Product_listing/></Route>
    <Route path={"/product/:pid"}><Product_page/></Route>
    <Route path={"/home"}><Land_page/></Route>
    </div>
  );
}

export default App;
