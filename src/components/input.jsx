import React, {Component} from "react";
import Label from "./label";
import './css/input.css';

export default class Input extends Component{
    render(){
        return(
            <section >
            <div className="input-group mb-3">
             <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese valores correspondientes" 
                    aria-describedby="basic-addon2"
                    name={this.props.name}
                />
                
                <div className="input-group-append" id="pair">
                    <span className="input-group-text" id="basic-addon2"><Label label={this.props.labelText} /></span>
                </div>
            </div>
            </section>
        );
    }
}




