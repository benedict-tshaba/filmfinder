import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {

	state = {
		film_list: [],
		heading: 'Top 10 Films'

	};

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?s=Predator&apikey=${process.env.REACT_APP_API_KEY}`)
		.then( (res) => { 
			//console.log(res.data); 
			this.setState({film_list: res.Search});
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