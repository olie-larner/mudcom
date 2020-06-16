import React from 'react';
import { ReactComponent as MudCom } from '../media/logo.svg';
import { ReactComponent as Slurry } from '../media/Slurry.svg';

const Logo = () => {
	return (
		<div className="w-1/2 sm:w-1/5">
			<MudCom />
			<Slurry />
		</div>
	);
};

export default Logo;
