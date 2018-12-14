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
        case 'FOTM':
            return {
                ...state,
                fotm: action.payload,
                heading: 'Film Of The Moment'
            };
		default:
			return state;
	}
};

const movies = ['tt0111161', 'tt0120737', 'tt0068646', 'tt0137523', 'tt0133093', 'tt0080684', 'tt1375666', 'tt0110912', 'tt0468569', 'tt0109830', 'tt0088763', 'tt0245429', 'tt0110357'];

export class Provider extends Component {

	state = {
		film_list: [],
        fotm: null,
		heading: 'Film Of The Moment',
		dispatch: action => this.setState( state => reducer(state, action) )
	};

	componentDidMount() {
		fetch(`${process.env.REACT_APP_API_LNK}?i=${movies[Math.floor(Math.random()*movies.length)]}&apikey=${process.env.REACT_APP_API_KEY}`)
		.then( (res) => res.json() )
		.then( (data) => { 
			this.setState({fotm: data});
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
