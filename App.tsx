import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/presentation/routes/StackNavigator';
import SideMenuNavigator from './src/presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
