import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
}

/* Recebe um state e uma action */
//Retorna o estado alterado de acordo com a action
export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case '@auth/SIGN_IN_SUCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      })

    default:
      return state
  }
}