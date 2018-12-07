import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';

class Fotm extends Component {

	render() {
        return (
            <Consumer>
                {value => {
				  	const {fotm, heading} = value;
	                if(fotm === null) {
				  		return <Spinner />;
				  	} else {
	                    let film = fotm;
	                    return (
				  			<React.Fragment>
			                    <h3 className="text-center mb-4">{heading}</h3>
			                    <div className="row">
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
			                            <Link to={`films/film/${film.imdbID}`} className="btn btn-dark btn-block"><i className="fa fa-chevron-right"></i> View Details
			                            </Link>
			                          </div>
			                        </div>
			                      </div>
			                      <div className="col-md-6">
				                    <div className="card mb-4 shadow-sm">
				                      <div className="card-img img-responsive">
				                        <img src={film.Poster} alt="Poster" />
				                      </div>
				                    </div>
				                  </div>
			                    </div>
	                    	</React.Fragment>
	                    );
	                }
	            }}
            </Consumer>
        );
    };
};

export default Fotm; 
