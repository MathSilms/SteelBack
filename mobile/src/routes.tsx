import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Register from './pages/register';
import Points from './pages/points';
import Detail from './pages/detail';
import ReadyToGo from './pages/ready';
import Maps from './pages/map';
import Cupons from './pages/cupons';

const AppStack = createStackNavigator();

const Routes = () =>{
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle:{
                        backgroundColor:'#f0f0f5'
                    }
                }}
             >
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="Points" component={Points}/>
                <AppStack.Screen name="Detail" component={Detail}/>
                <AppStack.Screen name="ReadyToGo" component={ReadyToGo}/>
                <AppStack.Screen name="Map" component={Maps}/>
                <AppStack.Screen name="Cupons" component={Cupons}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;