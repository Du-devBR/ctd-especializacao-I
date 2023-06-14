const STATE = {
  numero: 0
}

export default function CounterReducer(state = STATE, action) {
  if (action.type === 'INCREMENT') {
    return {
      ...state, numero: state.numero + 1
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state, numero: state.numero - 1
    }
  }

  if (action.type === 'RESET') {
    return {
      ...state, numero: 0
    }
  }

  return state;
}
