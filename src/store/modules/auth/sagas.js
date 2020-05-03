import { takeLatest ,call, put ,all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';
import { signInSucess } from './actions';

export function* signIn({ payload }){

  const { email, password } = payload;

  /* 
    Primeiro parametro -> URL
    Segundo parametro -> Dados que vão ser enviados
  */
  const response = yield call(api.post, 'sessions', {
    email,
    password
  });

  const { token, user } = response.data;

  if(!user.provider ){
    console.tron.error('Usuário não é prestador');
    return;
  }

  yield put(signInSucess(token, user));

  
  history.push('/dashboard');
}
/* Ouve as action para dispara um saga */
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);