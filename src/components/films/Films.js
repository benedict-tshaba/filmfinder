import React, {Component} from 'react';

import {Consumer} from '../../context';

class Films extends Component {
	render() {
		return (
			<Consumer>
			  {value => {
			  	console.log(value);
			  	return <h1>Films</h1>
			  }}
			</Consumer>
		);
	}
}

export default Films;