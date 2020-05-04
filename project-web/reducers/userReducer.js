import { StateProvider } from '../services';

const UserReducer = (props) => {
  const initialState = {
    user: {
      name: 'Brian',
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        }
      default:
        return state;
    }
  }

  return (
    <StateProvider
      initialState={initialState}
      reducer={reducer}
    >
      {props.children}
    </StateProvider>
  );
}

export default UserReducer;
