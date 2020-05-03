import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth'
import DefaultLayout from '~/pages/_layouts/default'

import { store } from '~/store'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}){
  /* Verificar se o usuario está logado ou não */
  const { signed } = store.getState().auth;

  /* Se o usuario não estiver logado e seja uma rota privada */
  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  /* Se o usuario esta logado, mas a rota não é privada */
  if(signed && !isPrivate){
    return <Redirect to="/dashboard"/>
  } 

  const Layout = signed ? DefaultLayout : AuthLayout;



  return <Route {...rest} render={ props => (
    <Layout>
      <Component {...props}/>
    </Layout>
  )}/>;
  
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.propTypes = {
  isPrivate: false,
};