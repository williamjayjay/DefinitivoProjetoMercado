import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Carrinho from '../Carrinho';
import Entrega from '../Entrega'


const RotasCarro = createStackNavigator({

  

  Carrinho:{
    screen: Carrinho
  },
  Entrega:{
    screen:Entrega
  },
  

},{
  defaultNavigationOptions:{
    headerBackTitle: null,
    
  }
}

);

export default RotasCarro;