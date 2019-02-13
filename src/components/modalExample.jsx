import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./css/modalExample.css"; 

export default class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,

    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Palabra o Imagen</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ingrese una palabra I/O imagen </ModalHeader>
          <ModalBody className="cuerpo">
            /*colocar la imagen mas grande y centrada*/
          <i class="far fa-file-image"></i>

          <input 
             type="text"
             className="form-control"
             placeholder="Ingrese una Palabra"
             aria-describedby="basic-addon2"
           /> 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Enviar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}




