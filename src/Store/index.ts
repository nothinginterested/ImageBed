import React, {createContext, useContext} from 'react';

import AuthStore from './auth';
import userStore from './user'
const context = createContext(
    {
        AuthStore,
        userStore
    }
);
(window as any).stores = {
    AuthStore,
    userStore
};

export const useStore = () => useContext(context);
