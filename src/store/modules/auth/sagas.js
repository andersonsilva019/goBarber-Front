import { takeLatest ,call, put ,all } from 'redux-saga/effects';
import { toast } from 'react-toastify'
import history from '~/services/history';
import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }){
  try {
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
      toast.error('Usuário não é prestador');
      return;
    }

    yield put(signInSucess(token, user));
    
    history.push('/dashboard');

  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
  }
  
}

export function* signUp({ payload }){
  try {
    const { name, email, password} = payload;
    
    /* Fazendo uma chamada API para cadastrar os dados do prestador de serviços */
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');

  } catch (error) { 
    toast.error('Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }
}
/* Ouve as action para dispara um saga */
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST',signUp),
]);