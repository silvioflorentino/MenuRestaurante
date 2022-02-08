import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Cardapio from './Cardapio';
import Sobremesa from './Sobremesa';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      
        <Tab.Screen
        name="Cardápio"
        component={Cardapio}
options = {{
tabBarIcon:({color,size})=><MaterialCommunityIcons name="silverware" color={color} size={size}/>
          }}
         />


        <Tab.Screen 
        name="Home"
        component={Home}
options = {{
tabBarIcon:({color,size})=><MaterialCommunityIcons name="home-heart" color={color} size={size}/>
          }}
         />


        <Tab.Screen
         name="Sobremesa"
          component={Sobremesa}
options = {{
tabBarIcon:({color,size})=><MaterialCommunityIcons name="cookie" color={color} size={size}/>
          }}          
          />
    </Tab.Navigator>
  );
}