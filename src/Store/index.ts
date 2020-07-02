import React, {createContext, useContext} from 'react';

import AuthStore from './auth';

const context = createContext(
    {
        AuthStore
    }
);
(window as any).stores = {
    AuthStore
};

export const useStore = () => useContext(context);
