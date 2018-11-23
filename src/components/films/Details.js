import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Spinner from '../layout/Spinner';

class Details extends Component {

	state = {
		film: {},
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
		.then( (res) => { 
			if(res.ok) {
				return res.json();	
			}
			throw new Error('Network response was not OK');
		})
		.then( (data) => { 
			//console.log(data);
			this.setState({film: data});
		})
		.catch( (err) => { console.log(err); });
	}

	render() {
		const {film} = this.state;
		//console.log(film);
		if(film === undefined || Object.keys(film).length === 0) {
			return <Spinner />;
		} else {
			return (
				<React.Fragment>
				  <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Back</Link>
				  <div className="card">
				    <h5 className="card-header">
				      {film.Title} by <span className="text-secondary">{film.Director}</span>
				    </h5>
				    <img src={film.Poster} className="ml-5 mt-2" alt="Poster" height="200" width="200" />
				    <div className="card-body">
				      <p className="card-text">{film.Plot}</p>
				    </div>
				  </div>

				  <ul className="list-group mt-3">
				    <li className="list-group-item">
				      <strong>Starring</strong>: {film.Actors}
				    </li>
				    <li className="list-group-item">
				      <strong>Awards</strong>: {film.Awards}
				    </li>
				    <li className="list-group-item">
				      <strong>Released</strong>: {film.Released}
				    </li>
				    <li className="list-group-item">
				      <strong>Language</strong>: {film.Language}
				    </li>
				    <li className="list-group-item">
				      <strong>Country</strong>: {film.Country}
				    </li>
				    <li className="list-group-item">
				      <strong>Genre</strong>: {film.Genre}
				    </li>
				    <li className="list-group-item">
				      <strong>Box Office</strong>: {film.BoxOffice}
				    </li>
				    <li className="list-group-item">
				      <strong>Writer</strong>: {film.Writer}
				    </li>
				    <li className="list-group-item">
				      <strong>imdbID</strong>: {film.imdbID}
				    </li>
				  </ul>
				</React.Fragment>
			);
		}
	}
}

export default Details;
