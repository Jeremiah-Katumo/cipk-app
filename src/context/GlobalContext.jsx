import React, { createContext, useReducer, useContext, useState } from 'react';
import userReducer from '../reducers/Reducer';

const INITIAL_STATE = {
    user: {
        username: '',
        name: '',
        email: '',
        password: '',
        error: '',
        success: '',
    },
    isFetching: false,
    error: false,
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
    });

    // const contextValue = {
    //     user: state.user,
    //     isFetching: state.isFetching,
    //     error: state.error,
    //     dispatch,
    //     values,
    //     setValues,
    // };

    return (
        <GlobalContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            values,
            setValues,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};
