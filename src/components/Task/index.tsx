import { Touchable, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text} from "react-native";
import {styles} from "./styles";
import { theme } from "../../theme";

type Props = {
    id?: string
    title: string
    isCompleted: boolean
}


export function Task({title, isCompleted}: Props){
    return <View style={styles.taskContainer}>
        <TouchableOpacity>
            <MaterialCommunityIcons
                name={isCompleted ? "checkbox-multiple-marked-circle-outline" : "checkbox-blank-circle-outline"}
                size={22}
                color={isCompleted ? theme.colors.purple : theme.colors.blue }
            />
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={isCompleted ? styles.textDone : styles.textCreated }>{title}</Text>
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