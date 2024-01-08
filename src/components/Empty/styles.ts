import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    emptyContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: theme.colors.gray400,
    borderEndColor: theme.colors.gray600,
    borderStartColor: theme.colors.gray600,
    borderBottomColor: theme.colors.gray600,
    borderWidth: 1,
    },
    image: {
        marginBottom: 16,
    },
    textBold: {
        fontSize: 14,
        fontFamily: theme.font_family.bold,
        color: theme.colors.gray300,
    },
    textRegular: {
        fontFamily: theme.font_family.regular,
    }
})