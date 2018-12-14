import React, {Component} from 'react';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';

import Films from '../films/Films';

class Fotm extends Component {

	render() {
        return (
            <Consumer>
                {value => {
				  	const {fotm, film_list, heading} = value;
	                if( film_list !== undefined && film_list.length !== 0 ) {
				  		return <Films />;
				  	} else if (fotm === null) {
				  		return <Spinner />;
				  	} else {
	                    let film = fotm;
	                    return (
				  			<React.Fragment>
				  			  <h1 className="text-center text-primary mb-4">{ heading }</h1>
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
	            }}
            </Consumer>
        );
    };
};

export default Fotm; 
