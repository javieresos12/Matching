import React, {Component} from "react";
import datos from "../Datos/Datos.json"; 
import Label from "./label";
import "./css/Correctas.css";

export default class Correctas extends Component{
  
    constructor(props){
        super(props);
    }

render(){
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
      
    return (
        <div className="container">
        <div className="form">
        <h3>Relacionar las palabras correctas </h3>
        <div className="principal-label">
            {data}
        </div>
        <div className="principal-input">
            {data2}           
        </div>
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
    )
}
}
