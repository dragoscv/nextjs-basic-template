import React, { createContext, useContext, useState, useEffect } from 'react';
// import {initFirebase} from '../firebase.config'
// import firebase from 'firebase/app'
// import 'firebase/database';


export const AppContext = createContext();

export function AppProvider({ children, sessionServer}) {
    

    useEffect(() => {
    }, []);

    let sharedState = {}


    return (
      <AppContext.Provider value={sharedState}>
        {children}
      </AppContext.Provider>
    );

}