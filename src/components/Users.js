import React from 'react';
import User from './User';

export default function Users() {
	return (
		<div className='right'>
			<User 
				src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				alt='man'
				name='Oleg'
			/>
			<User 
				src="https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				alt='man'
				name='Ivan'
			/>
			<User 
				src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				alt='man'
				name='Andrew'
			/>
		</div>

	)
}