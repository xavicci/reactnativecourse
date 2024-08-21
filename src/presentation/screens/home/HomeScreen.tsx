import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';
import HamburgerMenu from '../../components/shared/HamburgerMenu';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};

export default HomeScreen;
