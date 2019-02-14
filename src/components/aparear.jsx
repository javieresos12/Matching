import React, {Component} from "react";
import datos from "../Datos/Datos.json";
import Label from "./label";
import Correctas from "./correctas";
import "./css/aparear.css";


export default class Aparear extends Component{
    constructor(props){
        super(props);
    }

render(){
    const izquierda = datos.listaIzq.map((e)=>{
        return(
            <div key={e.id}>
            <div className="alert alert-primary" id="label2">
            <Label label={e.palIzq}/>
            </div>
            </div>
        );
    })

    const data = datos.listaDer.map((e)=>{
        return(
            <div key={e.id}>
               <div className="alert alert-primary" id="label2">
               <Label label={e.palDer}/>
               </div>             
            </div>
           );
       })

       const data2 = datos.listaDer.map((e,i)=>{
        const name = e.palIzq + i ;
        return (
            <div key={name}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese valores correspondientes"
                    aria-describedby="basic-addon2"
                    name={name}
                    onChange={(e) => this.syncField(e, {name})}
            />
            </div>
        );
    })

    return(
        <div className="contenedor">
           <h3>Aparear</h3>
           <div className="principal-izquierda">
                <div className="principal-label">
                   {izquierda}
                </div>
           </div>
           <div className="form">
               <div className="principal-label">
                  {data}
               </div>
               <div className="principal-input">
                  {data2}           
               </div>
           
            <div>
                  <input 
                   type="submit" 
                   className="btn btn-primary"                        
                   value="Validar"
                   id="button"
                  />
            </div>
            </div>
        </div>
    )
}
}

