import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface Props {
  onPress: () => void;
  label: string;
}

const PrimaryButton = ({onPress, label}: Props) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
export default PrimaryButton;
