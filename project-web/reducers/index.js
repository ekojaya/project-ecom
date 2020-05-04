import userReducer from './userReducer';

export const mainReducer = ({ user }, action) => {
  // middlewares
  console.log('logging happened');

  return {
    user: userReducer(user, action),
  };
};

