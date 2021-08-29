import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cabecalho from './Components/header'
import Apresentacao from './Components/apresentacao'

ReactDOM.render(
  <>
    <Cabecalho/>
    <Apresentacao/>
  </>,
  document.getElementById('root')
);