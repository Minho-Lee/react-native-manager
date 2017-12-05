import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router>
			{/* Stack is used for grouping Scenes together, so expect 2 navbars*/}
			<Scene key='root' hideNavBar>
				<Scene key='auth' initial>
					<Scene
						key='login'
						component={LoginForm}
						title='Please Login'
						titleStyle={{ alignSelf: 'center' }}
						
					/>
				</Scene>
				<Scene key='main'>
					<Scene
						key='employeeList'
						component={EmployeeList}
						title='Employees'
						rightTitle='Add'
						onRight={() => Actions.employeeCreate()}
					/>
					<Scene 
						key='employeeCreate'
						component={EmployeeCreate}
						title='Create Employee'
						titleStyle={{ alignSelf: 'center' }}
						rightTitle=''
						onRight={() => []}
					/>
					<Scene
						key='employeeEdit'
						component={EmployeeEdit}
						title='Edit Employee'
						titleStyle={{ alignSelf: 'center' }}
						rightTitle=''
						onRight={() => []}
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
