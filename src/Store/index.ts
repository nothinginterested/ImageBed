import React, {createContext, useContext} from 'react';

import AuthStore from './auth';
import UserStore from './user'
import ImageStore from './Image'
const context = createContext(
    {
        AuthStore,
        UserStore,
        ImageStore
    }
);
(window as any).stores = {
    AuthStore,
    UserStore,
    ImageStore
};

export const useStore = () => useContext(context);
