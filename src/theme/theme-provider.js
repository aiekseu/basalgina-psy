'use client';

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/src/theme/theme';
import UserGlobalStyles from '@/src/theme/global-styles';

const AppThemeProvider = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<UserGlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default AppThemeProvider;
