import { styles } from './styles';
import { ActivityIndicator, View } from 'react-native';


export function Loading(){
    return(
        <View style={styles.container}>
            <ActivityIndicator size={50} color='#4EA8DE'/>
        </View>
    )
}