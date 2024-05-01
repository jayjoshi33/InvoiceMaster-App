import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import MasterPage from './Components/MasterPage';
import DataEntryPage from './Components/DataEntryPage';
import ReportsPage from './Components/ReportsPage';
import PartyMaster from './Components/PartyMaster'; 
import ItemMaster from './Components/ItemMaster';
import CompanyMaster from './Components/CompanyMaster';
import PurchaseEntry from './Components/PurchaseEntry';
import SalesEntry from './Components/SalesEntry';
import PurchaseReport from './Components/PurchaseReport';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MasterPage" component={MasterPage} />
        <Stack.Screen name="DataEntryPage" component={DataEntryPage} />
        <Stack.Screen name="ReportsPage" component={ReportsPage} />
        <Stack.Screen name="PartyMaster" component={PartyMaster}/>
        <Stack.Screen name="ItemMaster" component={ItemMaster}/>
        <Stack.Screen name="CompanyMaster" component={CompanyMaster}/>
        <Stack.Screen name="PurchaseEntry" component={PurchaseEntry}/>
        <Stack.Screen name="SalesEntry" component={SalesEntry}/>
        <Stack.Screen name="PurchaseReport" component={PurchaseReport}/>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
