import React, { Component } from "react";
import inventory from "./inventory.ES6";

class ViewOrder extends Component {
  render() {
    return (
      <div className="container col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h4>Beställningen</h4>
          {this.props.order.map((salad) => (
            <div key={salad.uuid} className="form-control form-control-lg">
              {salad.getIngredients() + ", pris: " + salad.getPrice()}
            </div>
          ))}
          <p></p>
          <form onSubmit={this.props.handleRemove}>
            <button type="submit" className="btn btn-primary mb-3">
              ta bort
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ViewOrder;
