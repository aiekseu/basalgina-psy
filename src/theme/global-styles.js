import React from 'react';
import { GlobalStyles } from '@mui/material';

const UserGlobalStyles = () => (
	<GlobalStyles
		styles={{
			body: {
				margin: 0,
				backgroundColor: '#f3f3f3',
				overflow: 'hidden'
			},
			a: {
				textDecoration: 'none'
			},

			// scrollbar
			'&::-webkit-scrollbar': {
				width: 4,
				background: 'transparent'
			},
			'&::-webkit-scrollbar-thumb': {
				width: 4,
				background: '#4B87C8'
			},
			'&::-webkit-scrollbar-track': {
				background: 'transparent'
			},

			// Text selection color
			'::selection': {
				background: '#c8dfff'
			},
			'::-moz-selection': {
				background: '#c8dfff'
			}
		}}
	/>
);

export default UserGlobalStyles;
