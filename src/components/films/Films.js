import React, {Component} from 'react';

import {Consumer} from '../../context';

import Spinner from '../layout/Spinner';
import Film from '../films/Film';

class Films extends Component {
	render() {
		return (
			<Consumer>
			  {value => {
			  	const {film_list, heading} = value;
			  	console.log(value);
			  	if(film_list === undefined || film_list.length === 0) {
			  		return <Spinner />;
			  	} else {
			  		return (
			  			<React.Fragment>
			  			  <h3 className="text-center mb-4">{heading}</h3>
			  			<div className="row">
			  			  {film_list.map( (item) => (
			  			  	<Film key={item.imdbID} film={item} />
			  			  ) )}
			  			</div>
			  			</React.Fragment>
			  		);
			  	}
			  }}
			</Consumer>
		);
	}
}

export default Films;