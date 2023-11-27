import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../redux/auth/auth_reducers';
import styles from '../styles/custom_styles';
import RegisterScreen from './register';
import LoginScreen from './loginScreen';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const togglePages = () => {
    setShowRegister(prevShowRegister => !prevShowRegister);
  };

  return (
    <Provider store={store}>
    <View style={styles.container}>
      {showRegister ? (
        <RegisterScreen togglePages={togglePages} />
      ) : (
        <LoginScreen togglePages={togglePages} />
      )}
    </View>
    </Provider>
  );
};



export default App;