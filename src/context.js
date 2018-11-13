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