import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {

	state = {
		film_list: [
			{ film: { film_name: 'abc' } },
			{ film: { film_name: '123' } },
		],
		heading: 'Top 10 Films'

	};

	render() {
		return (
			<Context.Provider value={this.state}>
			  {this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;