import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        height: 64,
        backgroundColor: theme.colors.gray500,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 4,
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.gray400,
    }
})