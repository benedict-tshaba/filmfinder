import React from 'react';
import Films from '../films/Films';
import Search from '../films/Search';

const Index = () => {
	return (
		<React.Fragment>
		  <Search />
		  <Films />
		</React.Fragment>
	);
};

export default Index;