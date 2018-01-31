import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../layout'
import InputForm from '../input'
import { Button } from 'reactstrap';
import './index.css';

class MyForm extends React.Component{
  render(){
    return(
    <div className="MyForm">
      <div className="container">
        <div className="Form">
          <form className="form-group">
            <InputForm name={"name"} placeholder={"Nom"}/>
            <InputForm name={"firstName"} placeholder={"Prénom"}/>
            <Button color="secondary" type="submit">Valider</Button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default MyForm;
