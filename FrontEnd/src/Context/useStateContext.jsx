import { useContext } from 'react';
import { StateContext } from './ContextProvider';

const useStateContext = () => useContext(StateContext);

export default useStateContext;
