import React from 'react';
import './index.css';
import { InputGroup, Input } from 'reactstrap';

class InputForm extends React.Component{
  render(){
    return(
      <InputGroup>
        <Input name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} className="form-control"/>
      </InputGroup>
    )
  }
}

export default InputForm;
