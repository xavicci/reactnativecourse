import {createStackNavigator} from '@react-navigation/stack';
import {useEffect} from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/setting/SettingsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {useNavigation} from '@react-navigation/native';

interface listProducts {
  id: number;
  name: string;
}

export type RootStackParams = {
  Home: undefined;
  Product: listProducts;
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
