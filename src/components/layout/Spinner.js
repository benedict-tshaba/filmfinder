import React from 'react';
import spinner from './spinner.gif';

export default () => {
	return (
		<div>
		  <img
		    src={spinner}
		    alt="Loading..."
		    style={{ width: '25px', margin: '40px auto', display: 'block' }}
		  />
		</div>
	);
};