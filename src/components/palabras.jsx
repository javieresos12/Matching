import React, {Component} from "react";
import datos from "../Datos/Datos.json"; 
import Label from "./label";
import "./css/Palabras.css";
import ModalExample from "./modalExample";

export default class Palabras extends Component{

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

    const derecha = datos.listaDer.map((e)=>{
        return(
            <div  key={e.id}>
            <div className="alert alert-primary" id="label2">
              <Label label={e.palDer}/>
            </div>
            </div>
        );
        })
    

    return(
    <div className="contenedor">
        <div className="principal-derecha">
            <h3>Palabras Derecha</h3>
            <div className="button2">
               <ModalExample/>
            </div>
           <div className="principal-label2">
               {derecha}
          </div> 
        </div>

        <div className="principal-izquierda">
           <h3>Palabras Izquierda</h3>
          <div className="button2">
               <ModalExample/>
          </div>
          <div className="principal-label">
               {izquierda}
          </div>
        </div>
    </div>
    )
 }
}
