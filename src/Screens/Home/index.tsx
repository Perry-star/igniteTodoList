import { FlatList, Text, View, Alert, TextInput } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import React, { useReducer, useRef, useState } from 'react';
import { Empty } from '../../components/Empty';
import { uuid } from '../../utils/uuid';

type Props = {
    id: string  
    isCompleted: boolean
	title: string
}


export function Home() {
	const [ tasks, setTasks] = useState<Props[]>([])
	const [ newTask, setNewTask] = useState('')
	const InputRef = useRef<TextInput>(null)

	function handleTaskAdd() {
		if (newTask !== '' && newTask.length >= 5) {
			setTasks((tasks) => [
				...tasks,
				{ id: uuid(), isCompleted: false, title: newTask.trim() },
			])

			setNewTask('')

			InputRef.current?.blur()
		}
	}

	function handleTaskComplete(id: string) {
		setTasks((task) =>
			task.map((task) => {
				task.id === id ? (task.isCompleted = !task.isCompleted) : null
				return task
			}),
		)
	}

	function handleTaskDeleted(id: string) {
		Alert.alert('Excluir tarefa', 'Desejar excluir essa tarefa?', [
			{
				text: 'Sim',
				style: 'default',
				onPress: () =>
					setTasks((tasks) => tasks.filter((task) => task.id !== id)),
			},
			{
				text: 'Não',
				style: 'cancel',
			},
		])
	}

	const TasksCreated = tasks.length 
	const TasksCompleted = tasks.filter(({isCompleted}) => isCompleted).length

	
    return(
        <View style={styles.container}>
           <Header 
		   		inputRef={InputRef}
		   		task={newTask} 
		   		onChangeText={setNewTask} 
				onPress={handleTaskAdd}
				/>    
			<View style={styles.tasksContainer}>
				<View style={styles.info}>	
					<View style={styles.row}>
						<Text style={styles.tasksCreated}>Criadas</Text>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>{TasksCreated}</Text>
						</View>
					</View>
					<View style={styles.row}>
						<Text style={styles.tasksDone}>Concluídas</Text>                        
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>{TasksCompleted}</Text>							
						</View>	
					</View>
				</View>	

				

				<FlatList
					data={tasks}
					keyExtractor={(tasks) => tasks.id}
					renderItem={({item}) => (
						<Task 
							key={item.id} 
							onTaskComplete={() => handleTaskComplete(item.id)}
							onTaskDeleted={() => handleTaskDeleted(item.id)}
						{...item}
		
						/>
					)}
					ListEmptyComponent={<Empty />}
				/>	
				
			</View>
        </View>
      
    )
}