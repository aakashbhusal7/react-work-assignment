import React, { useState, Fragment } from 'react'
import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const usersData = [

	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const [searchTerm, setSearchTerm] = React.useState("");
	const[searchTermPhone,setSearchTermPhone]=React.useState("");
	const handleChange = event => {
		setSearchTerm(event.target.value);
		
	};
	const handleChangePhone=event=>{
		setSearchTermPhone(event.target.value);
		
	};

	 let results = !searchTerm
		? users
		: users.filter(user =>
			user.country.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
		);

		results= !searchTermPhone
		?results
		:results.filter(user=>
			user.phoneNumber.toLowerCase().includes(searchTermPhone.toLocaleLowerCase())
			
		);
	return (
		<div className="container">
			<h1 align="center">My Sample React Application</h1>
			<div className="flex-row">
				<div className="flex-large">
				
							<Fragment>
								<h2>Add user</h2>
								<AddUserForm addUser={addUser} />
							</Fragment>
						
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<input
						type="text"
						placeholder="Search By Country"
						value={searchTerm}
						onChange={handleChange}
					/>
					<input
						type="text"
						placeholder="Search By Phone Number"
						value={searchTermPhone}
						onChange={handleChangePhone}
					/>
					<UserTable users={results} />
				</div>
			</div>
		</div>
	)
}

export default App