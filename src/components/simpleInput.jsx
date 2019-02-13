import React, { Component } from "react";
import './index.css';

export default class SimpleInput extends Component {

    constructor() {
        super();
        this.state = {
            //arrayForm:[],
            datosInput:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      
        /*this.setState({
            arrayForm: data
        })*/
    }

    insertDato(name,dato){
        const data = this.state.datosInput.map((e)=>{
            if (typeof e[name] !== "undefined"){
                e[name] = dato
            }
            return e;
        })
        this.setState({
            datosInput: data
        })
    }

    existCamp(campo){
        var sw = false;
        for (let index = 0; index < this.state.datosInput.length; index++) {
            if (typeof this.state.datosInput[index][campo] !== "undefined") {
                sw= true;
            }
        }
        return sw;
    }
    
    syncField(ev, fieldName) {
        let element = ev.target;
        let value = element.value;
        let jsonState = {};
        if (this.existCamp(fieldName.name)){
            this.insertDato(fieldName.name,value);
        }else{
            jsonState[fieldName.name] = value;
            var d = this.state.datosInput;
            d.push(jsonState)
            this.setState({
                datosInput: d
            })
        }
    }

    handleSubmit(event){
        event.preventDefault();
        let dat = this.state.datosInput;
        console.log(dat);
    }

    render() {
        return (
            <div>
                <form className="formulario" 
                    onSubmit={this.handleSubmit}
                >
                    {this.state.arrayForm}
                </form>
            </div>
        );
    }
}

const datos = {
    "idusuer": "usu33332",
    "listaIzq": [{ "id": 1, "palIzq": "Hernvivoro2", "src": "" },
    { "id": 2, "palIzq": "Invertebrado", "src": "" },
    { "id": 3, "palIzq": "Carnivoro", "src": "" },
    { "id": 4, "palIzq": "Vertebrado", "src": "" }],

    "listaDer": [{ "id": 11, "palDer": "Leon", "src": "" },
    { "id": 12, "palDer": "Vaca", "src": "" },
    { "id": 13, "palDer": "Culebra", "src": "" },
    { "id": 14, "palDer": "Gusano", "src": "" }],
    "respUsuario": [
        { "id": 11, "rpta": [1, 4] },
        { "id": 12, "rpta": [1, 4] },
        { "id": 13, "rpta": [4, 3] },
        { "id": 14, "rpta": [2] }],
    "respCorrecta": [
        { "id": 11, "rpta": [3, 4] },
        { "id": 12, "rpta": [1, 4] },
        { "id": 13, "rpta": [2, 3] },
        { "id": 14, "rpta": [1, 2] }],
    "puntaje": 0.0
}