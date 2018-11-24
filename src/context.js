import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
		case 'SEARCH_FILMS':
			return {
				...state,
				film_list: action.payload,
				heading: 'Search Results'
			};
		default:
			return state;
	}
};

const titles = ['John Wick', 'The Lord of the Rings', 'Predator', 'Basic Instict', 'The Matrix', 'The Godfather', 'Citizen Kane', 'Pulp Fiction', 'The Dark Knight', 'Jaws', 'Toy Story', 'Titanic', 'Back to the Future', 'Alien'];

export class Provider extends Component {

	state = {
		film_list: [],
		heading: 'Film of the Moment',
		dispatch: action => this.setState( state => reducer(state, action) )
	};

	componentDidMount() {
		fetch(`${process.env.REACT_APP_API_LNK}?s=${titles[Math.floor(Math.random()*titles.length)]}&apikey=${process.env.REACT_APP_API_KEY}`)
		.then( (res) => { 
			if(res.ok) {
				//this.setState({film_list: res});
				return res.json();	
			}
			throw new Error('Network response was not OK');
		})
		.then( (data) => { 
			//console.log(data);
			this.setState({film_list: data.Search});
		})
		.catch( (err) => { console.log(err); });
	}

	render() {
		return (
			<Context.Provider value={this.state}>
			  {this.props.children}
			</Context.Provider>
		);
	}
};

export const Consumer = Context.Consumer;
