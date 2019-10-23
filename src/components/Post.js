import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
	render() {
		return (
			<div className='post'>
				<User 
					src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
					alt='man'
					name='Oleg'
				/>
				<img src={this.props.src} alt={this.props.alt}/>
				<div className='post__name'>
					Life is life
				</div>
				<div className='post__descr'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, asperiores laudantium modi est minus quas inventore mollitia omnis, ut unde impedit aspernatur dolor ea dignissimos dolorum doloribus dolore facilis, nam.
				</div>
			</div>
		)
	}
}