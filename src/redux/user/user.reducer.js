const INITIAL_STATE = {
  number: 0,
  fact: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        number: state.number + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        number: state.number - 1,
      };
    case 'FACT':
      return {
        ...state,
        fact: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
