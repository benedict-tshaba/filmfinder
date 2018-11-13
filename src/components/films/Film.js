import React from 'react';
import {Link} from 'react-router-dom';

const Film = (props) => {

	const {film} = props;

	return (
		<div className="col-md-6">
		  <div className="card mb-4 shadow-sm">
		    <div className="card-body">
		      <h5>{film.Title}</h5>
		      <p className="card-text">
		        <strong><i className="fa fa-film"></i> Film</strong>: {film.Title}
		        <br/>
		        <strong><i className="fa fa-random"></i> Type</strong>: {film.Type.toUpperCase()}
		        <br/>
		        <strong><i className="fa fa-calendar"></i> Year</strong>: {film.Year}
		      </p>
		      <Link to={`films/film/${film.imdbID}`} className="btn btn-dark btn-block">
		        <i className="fa fa-chevron-right"></i> View Details
		      </Link>
		    </div>
		  </div>
		</div>
	);
};

export default Film;