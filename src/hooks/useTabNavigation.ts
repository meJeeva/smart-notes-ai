import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native"
import { BottomTabProps } from "../navigations/BottomTabNavigation";


export const useTabNavigation = () => {
    type TabNavProp = BottomTabNavigationProp<BottomTabProps>;
    return useNavigation<TabNavProp>();
}