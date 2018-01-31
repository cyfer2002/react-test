import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../layout'
import MyForm from '../form'
import { Button } from 'reactstrap';

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
        <Layout/>
        <MyForm/>
      </div>
    )
  }
}

export default Main;
