import React from 'react'; 
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Preload from './components/Preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Pagamento from './pages/Pagamento'
import Fim from './pages/Fim';
import FimCard from './pages/FimCard';

import Dashboard from './pages/Dashboard';

import New from './pages/New';
import Profile from './pages/Profile';
// import Cadastro from './pages/Cadastro';
// import Comprar from './Comprar';
import Acougue from './src/Acougue';
import Alimentos from './src/Alimentos';
import Bebidas from './src/Bebidas';
import Higiene from './src/Higiene';
import Laticinios from './src/Laticinios';
import Limpeza from './src/Limpeza';
import Biscoitos from './src/Biscoitos';
import Enlatados from './src/Enlatados';
import Despensa from './src/Despensa';
import Variedades from './src/Variedades';
import HortiFruti from './src/HortiFruti';

import Notes from './pages/Notes';

// import CadLaticinios from './pages/CadLaticinios'




// import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        Preload,
        SignIn,
        SignUp,
        ForgetPassword,
        Pagamento,
        Fim,
        FimCard,

        Acougue,
        Alimentos,
        Bebidas,
        Higiene,
        Laticinios,
        Limpeza,
        Biscoitos,
        Enlatados,
        Despensa,
        Variedades,
        HortiFruti


      }),
      App: createBottomTabNavigator({
        Dashboard,
        Notes,
        New,
        Profile,
        // Cadastro
        
        
      }, {
        tabBarOptions:{
          showLabel: false,
          activeTintColor: '#f44336',
          style:{
            borderTopColor: '#1B2D4E',
            backgroundColor: '#fff'
          }
        }
        
      })
   
    },
  ),
)

export default Routes;