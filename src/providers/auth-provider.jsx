import { createContext, useContext, useEffect, useReducer } from 'react';


const initialState = {
  authenticated: false,
  token: null
};

const getInitialState = () => {
  if (localStorage.getItem("initialState")) {
    return JSON.parse(localStorage.initialState);
  }
  return initialState;
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signIn":
      return {
        authenticated: true,
        token: action.payload,
      };
    case "signOut":
      return {
        authenticated: false,
        token: null,
      };
    default:
      return state;
  }
};


const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, getInitialState())

  useEffect(() => {
    localStorage.setItem("initialState", JSON.stringify(state));
  }, [state]);
  
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      { children }
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);