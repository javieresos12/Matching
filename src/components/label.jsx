import React, { Component } from "react";


export default class Label extends Component{
    render(){
        return(
            <div style={{...styles,
                padding:this.props.padding}}
            >
                {this.props.label}
            </div>
        );
    }
}


const styles ={
    padding:"10px",
}

Label.defaultProps = {
    label:"label 2"
    
};