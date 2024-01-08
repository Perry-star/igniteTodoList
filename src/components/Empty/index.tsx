import { View, Image, Text} from "react-native";
import clipboard from '../../assets/Clipboard.png';
import { styles } from './styles';

export function Empty(){
    return <View style={styles.emptyContainer}>
        <Image source={clipboard} style={styles.image}/>
        <Text style={styles.textBold}>
            Nenhuma tarefa encontrada
        </Text>
        <Text style={[styles.textBold, styles.textRegular]}>
            Cadastre sua primeira tarefa
        </Text>
    </View>
}