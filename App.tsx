import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/presentation/routes/StackNavigator';
import SideMenuNavigator from './src/presentation/routes/SideMenuNavigator';
import {BottomTabNavigator} from './src/presentation/routes/BottomTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};
