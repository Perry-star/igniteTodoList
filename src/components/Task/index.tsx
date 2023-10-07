import { Touchable, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text} from "react-native";
import {styles} from "./styles";
import { theme } from "../../theme";

export function Task(){
    return <View style={styles.taskContainer}>
        <TouchableOpacity>
            <MaterialCommunityIcons
                name="checkbox-multiple-marked-circle-outline"
                size={22}
                color={theme.colors.purple}
            />
        </TouchableOpacity>
        <View>
            <Text>Estudar JavaScript</Text>
        </View>

        <TouchableOpacity>
            <MaterialCommunityIcons
                name="trash-can-outline"
                size={20}
                color={theme.colors.gray300}
            />
        </TouchableOpacity>
               

    </View>
}