import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#00A876',
				background: '#e1e1e1',
				hover: '#008c64',
				inactive: '#005e42'
			},
			secondary: {
				main: '#4B87C8',
				hover: '#3b6b9f',
				inactive: '#2c4e73',
				text: '#2a2a2a'
			},
			error: {
				main: '#931F1D',
				hover: '#721916',
				inactive: 'rgba(114,25,22,0.46)'
			}
		},
		typography: {
			allVariants: {
				color: '#1e1e1e',
				whiteSpace: 'pre-line'
			}
		},
		components: {}
	})
);

export default theme;
