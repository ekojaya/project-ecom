const initialState = {
  loading: true,
  blogList: [],
}

export default (state, action) => {
  switch (action.type) {
    case 'LOAD_BLOGLIST':
      return {
        ...state,
        loading: true,
      }
    case 'SET_BLOGLIST':
      return {
        ...state,
        blogList: action.payload,
      }
    default:
      throw new Error('Could not find type');
  }
}