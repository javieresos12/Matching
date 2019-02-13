import React, {Component} from "react";
import Label from "./label";
import datos from "../Datos/Datos.json"; 
import "./css/respuesta.css";

export default class Aparear extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const izquierda = datos.listaIzq.map((e)=>{
            return(
                <div  key={e.id}>
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
            const name = e.palDer + i ;
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
<h4>Relacionar las palabras correctas </h4>
    <div className="Aparear">
           {izquierda}
    </div>           
    <div className="principal">
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
                value="Aparear"
                id="button"
            />
        </div>
</div>
        )
        
    }
}


