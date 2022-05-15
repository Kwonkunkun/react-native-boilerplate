import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "types/navigation";

export default function useCustomNavigation() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return navigation;
}
