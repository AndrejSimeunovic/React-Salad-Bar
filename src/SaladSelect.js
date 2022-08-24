import React, { Component } from 'react';
import inventory from './inventory.ES6';

class SaladSelect extends Component {
    // constructor(props){
    //     super(props);   

    // }



    render() {
        return (

                <div className='form-group col-md-4'>


                    <select
                        className="form-control col-md-4 form-select"
                        name={this.props.property}
                        onChange={this.props.handleSelect}
                        required 
                    >
                        <option value=''>Gör ditt val</option>
                        {Object.keys(inventory).filter(name => inventory[name][this.props.property]).map(name =>
                            <option key={name} value={name}>{name + ', ' + inventory[name].price + ' kr'}</option>)}
                    </select>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> no good! </div>
                </div>
        

        );
    }


}
export default SaladSelect;