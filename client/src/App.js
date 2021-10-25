import Home from "../src/pages/home";
import Product from "../src/pages/product";
import ProductList from "../src/pages/productList";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import Cart from "../src/pages/cart";
import Success from "../src/pages/success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>

    // <Router>
    //   <Switch>
    //     <Route path="/pay">
    //       <Pay />
    //     </Route>
    //
    //   </Switch>
    // </Router>
  );
}

export default App;
