import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', country: '' ,favPhoneBrand:'',phoneNumber:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.country 
					|| !user.favPhoneBrand || !user.phoneNumber) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Country</label>
			<input type="text" name="country" value={user.country} onChange={handleInputChange} />
			<label>Favorite Phone Brand</label>
			<input type="text" name="favPhoneBrand" value={user.favPhoneBrand} onChange={handleInputChange} />
			<label>Phone Number</label>
			<input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
