import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import { useState } from 'react';

type Props = {
    id?: string
    title: string
    isCompleted: boolean
}


export function Home() {
	const [ tasks, setTasks] = useState<Props[]>([
		{id: '1', isCompleted: true, title: 'Estudar Javascript'},
		{id: '2', isCompleted: true, title: 'Estudar React'},
		{id: '3', isCompleted: true, title: 'Estudar React-Native'},		
	])

    return(
        <View style={styles.container}>
           <Header/>    
			<View style={styles.tasksContainer}>
				<View style={styles.info}>	
					<View style={styles.row}>
						<Text style={styles.tasksCreated}>Criadas</Text>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>0</Text>
						</View>
					</View>
					<View style={styles.row}>
						<Text style={styles.tasksDone}>Concluídas</Text>                        
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>0</Text>							
						</View>	
					</View>
				</View>	

				<FlatList
					data={tasks}
					keyExtractor={(tasks) => tasks.id!}
					renderItem={({item}) => (
						<Task 
							key={item.id} 
							isCompleted={item.isCompleted} 
							title={item.title}
		
						/>
					)}
				/>
				
			</View>
        </View>
      
    )
}