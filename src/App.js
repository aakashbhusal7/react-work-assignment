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
	const[users2,setUsers2]=useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const[currentUser2,setCurrentUser2]=useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
		setUsers2([...users2,user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	const [searchTerm, setSearchTerm] = React.useState("");
	const[searchTermPhone,setSearchTermPhone]=React.useState("");
	const handleChange = event => {
		setSearchTerm(event.target.value);
		
	};
	const handleChangePhone=event=>{
		setSearchTermPhone(event.target.value);
		
	};

	

	 const results = !searchTerm
		? users
		: users.filter(user =>
			user.country.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
			user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
			user.phoneNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase())
			
		);

		const results1= !searchTermPhone
		?users2
		:users2.filter(user=>
			user.phoneNumber.toLowerCase().includes(searchTermPhone.toLocaleLowerCase())
			
		);

	return (
		<div className="container">
			<h1 align="center">My Sample React Application</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2>Add user</h2>
								<AddUserForm addUser={addUser} />
							</Fragment>
						)}
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
					<UserTable users={results} users2={results1} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
