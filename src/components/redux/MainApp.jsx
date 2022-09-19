import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import { AuthRouter } from './AuthRouter';

export const MainApp = () => {
  /**
   * Configuración de redux en la aplicación.
   */
  return (
    <Provider store={store}>
      <AuthRouter/>
    </Provider>
  )
}
