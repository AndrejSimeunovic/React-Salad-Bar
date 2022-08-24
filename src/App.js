import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
import ViewOrder from './ViewOrder';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import ComposeSaladWrapper from './ComposeSaladWrapper';
import ViewIngredient from './ViewIngredient';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shoppingCart: [] };
    this.addSalad = this.addSalad.bind(this);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
  }
  //let extras = Object.keys(inventory).filter(name => inventory[name].extra);
  addSalad(salad) {
    this.setState(prevState => ({
      shoppingCart: [...prevState.shoppingCart, salad]
    }));

    // let copyState = [...this.state.shoppingCart];
    // copyState.push(salad);
    // this.setState({ shoppingCart: copyState });
  }

  handleRemoveButton(event) {
    this.setState({ shoppingCart: [] });
  }
  render() {
    return (
      <div className="container py-4">
        <Header />
        <Navbar />
        {this.renderRouter()}
        <Footer />
      </div>
    );
  }
  renderRouter() {
    return (
      <Routes>
        <Route index  path="/" element={<h1>Välkommna!</h1>}/>
        <Route path="/compose-salad" element={<ComposeSaladWrapper inventory={inventory} addToShoppingcart={this.addSalad} />} />
        <Route path="/view-order" element={<ViewOrder order={this.state.shoppingCart} handleRemove={this.handleRemoveButton} />} />
        <Route path="/view-ingredient/:name" element={<ViewIngredient inventory={inventory} />}/>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>Finns inget här!</p>
        </main>
      }
    />
      </Routes>

    );
  }
}
function Header() {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Min egen salladsbar</span>
    </header>
  );
}

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/compose-salad">
          Komponera en sallad
        </Link>
      </li>
      <Link className="nav-link" to="/view-order">
        Visa beställningen
      </Link>
    </ul>);
}

function Footer() {
  return (
    <footer className="pt-3 mt-4 text-muted border-top">
      Andrej Simeunovic
    </footer>
  );
}


export default App;
//{extras.map(name => <div key={name} className="col-4">{name}</div>)}

//<ViewOrder order={this.state.shoppingCart} handleRemove = {this.handleRemoveButton} />

//<ComposeSalad inventory={inventory} addToShoppingcart={this.addSalad} />