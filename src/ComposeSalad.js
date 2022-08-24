import { Component } from 'react';
import SaladSelect from './SaladSelect';
import inventory from './inventory.ES6';
import CheckBox from './CheckBox';
import Salad from './Salad';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = { foundation: '', protein: '', extra: {}, dressing: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleExtra = this.handleExtra.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.parentElement.classList.add("was-validated");
    this.setState({ [event.target.name]: event.target.value });
  }
  handleExtra(event) {
    // let copyState = { ...this.state[event.target.value] };
    // copyState[event.target.name] = event.target.checked;
    // this.setState({ [event.target.value]: copyState });
    this.setState(prevState => (
      { extra: { ...prevState.extra, [event.target.name]: event.target.checked } }
    ));
  }

  createSalad() {
    let salad = new Salad();
    salad.add(this.state.foundation, this.props.inventory[this.state.foundation])
    salad.add(this.state.protein, this.props.inventory[this.state.protein])
    Object.keys(this.state.extra).forEach(name => salad.add(name, inventory[name]));
    salad.add(this.state.dressing, this.props.inventory[this.state.dressing]);
    //console.log(JSON.stringify(salad));
    return salad;
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.classList.add("was-validated");
    // let salad = new Salad();
    // salad.add(this.state.foundation,inventory[this.state.foundation])
    // salad.add(this.state.protein,inventory[this.state.protein])
    // Object.keys(this.state.extra).forEach(name => (this.state.extra[name] ? salad.add(name,inventory[name]): salad.remove(name)));
    // salad.add(this.state.dressing,inventory[this.state.dressing]);
    // console.log(JSON.stringify(salad));
    if (event.target.checkValidity() === false) {
      //console.log("ERROR!!!");
      //event.preventDefault();
    } else {
      this.props.addToShoppingcart(this.createSalad());
      this.setState({ foundation: '', protein: '', extra: {}, dressing: '' });
      this.props.navigate("/view-order");
      //console.log("NOT ERROR!!!");
    }




    //Stack
    // document.getElementById('foundation').reset();
    // document.getElementById('protein').reset();
    // document.getElementById('extra').reset();
    // document.getElementById('dressing').reset();
  }

  render() {
    //let extras = Object.keys(this.props.inventory).filter(name => this.props.inventory[name].extra);
    //let foundationList = Object.keys(inventory).filter(x => inventory[x].foundation);
    return (
      <div className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">

          <form onSubmit={this.handleSubmit} noValidate >

            <h2>Välj innehållet i din sallad</h2>
            <h1>foundation</h1>

            <SaladSelect property={'foundation'} handleSelect={this.handleChange} />

            <h1>protein</h1>

            <SaladSelect property={'protein'} handleSelect={this.handleChange} />

            <h1>extra</h1>

            <CheckBox property={'extra'} list={this.state.extra} handleSelect={this.handleExtra} />

            <h1>dressing</h1>

            <SaladSelect property={'dressing'} handleSelect={this.handleChange} />
            <p></p>
            <button type="submit" className="btn btn-primary mb-3">Beställ</button>

          </form>
        </div>
      </div>
    );
  }

}
export default ComposeSalad;

{/* <select>
{Object.keys(inventory).filter(x => inventory[x].foundation).map(x => 
<option key={x}>{x + ', ' + inventory[x].price + ' kr'}</option>)}
</select> */}