import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';

const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menú</Text>
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
export default HamburgerMenu;
