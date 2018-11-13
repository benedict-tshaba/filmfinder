import React, {Component} from 'react';

import {Consumer} from '../../context';

class Search extends Component {

	state = {
		filmTitle: '',
	};

	findFilm = (dispatch, e) => {
		e.preventDefault();
		fetch(`http://www.omdbapi.com/?s=${this.state.filmTitle}&apikey=${process.env.REACT_APP_API_KEY}`)
		.then( (res) => { 
			if(res.ok) {
				return res.json();	
			}
			throw new Error('Network response was not OK');
		})
		.then( (data) => { 
			//console.log(data);
			dispatch({
				type: 'SEARCH_FILMS',
				payload: data.Search
			});

			this.setState({filmTitle: ''});
		})
		.catch( (err) => { console.log(err); });
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render() {
		return (
			<Consumer>
			  {value => {
			  	const {dispatch} = value;
			  	return (
			  		<div className="card card-body mb-4 p-4">
			  		  <h1 className="display-4 text-center">
			  		    <i className="fa fa-film"></i> Seach For a Film
			  		  </h1>
			  		  <p className="lead text-center">Find your favourite movie</p>
			  		  <form onSubmit={this.findFilm.bind(this, dispatch)}>
			  		    <div className="form-group">
			  		      <input 
			  		        type="text" 
			  		        className="form-control form-control-lg" 
			  		        placeholder="Film title..." 
			  		        name="filmTitle" 
			  		        value={this.state.filmTitle}
			  		        onChange={this.onChange}
			  		       />
			  		    </div>
			  		    <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Find Film</button>
			  		  </form>
			  		</div>
			  	);
			  }}
			</Consumer>	
		);
	}
}

export default Search;