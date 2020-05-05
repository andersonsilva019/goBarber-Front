import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify'

import api from '~/services/api';

import {updateProfileSucess, updateProfileFailure} from './actions'

export function* updateProfile({ payload }){
  try {
    const { name,  email, avatar_id, ...rest } = payload.data;

    /* Object.assign -> Serve para unir dois objetos */
    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSucess(response.data));

  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([
  /* Assim que for disparada essa ação, executo a função updateProfile */
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);