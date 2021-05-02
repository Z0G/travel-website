import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/services" exact component={Services}/>
              <Route path="/products" exact component={Products}/>
              <Route path="/sign-up" exact component={SignUp}/>
          </Switch>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
