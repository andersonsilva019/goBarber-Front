import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}){
  /* Verificar se o usuario está logado ou não */
  const signed = false;

  /* Se o usuario não estiver logado e seja uma rota privada */
  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  /* Se o usuario esta logado, mas a rota não é privada */
  if(signed && !isPrivate){
    return <Redirect to="/dashboard"/>
  } 

  return <Route {...rest} component={Component}/>;
  
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.propTypes = {
  isPrivate: false,
};