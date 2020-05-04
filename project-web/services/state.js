import {
  useRef,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from 'react';

/**
 * 
 * @param {object} value
 * usePrevious will return previous value of wrapped state 
 * 
 * EXAMPLE:
 * 
 * const App = () => {
 *  const [count, setCount] = useState(0);
 * 
 *  const prevCount = usePrevious(count);
 * 
 *  return (
 *    <div>{count}</div>
 *  );
 * }
 */
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * This will be global state provider.
 */
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider
      value={useReducer(reducer, initialState)}
    >
      {children}
    </StateContext.Provider>
  );
}
export const useStateValue = () => useContext(StateContext);