import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WarningScreen from './screens/WarningScreen';
import KidDateScreen from './screens/KidDateScreen';
import DashboardUser from './screens/DashboardUser';
import DashboardVehicle from './screens/DashboardVehicle';
import DashboardAnimals from './screens/DashboardAnimals';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false }} name="WarningScreen" component={WarningScreen}   />
        <Stack.Screen options={{headerShown: false }} name="KidDateScreen" component={KidDateScreen} />
        <Stack.Screen options={{headerShown: false }} name="DashboardUser" component={DashboardUser} />

        <Stack.Screen options={{headerShown: false }} name="DashboardVehicle" component={DashboardVehicle} />
        <Stack.Screen options={{headerShown: false }} name="DashboardAnimals" component={DashboardAnimals} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
