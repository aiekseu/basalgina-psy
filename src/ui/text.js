import React from 'react';
import { Montserrat, Poiret_One } from 'next/font/google';
import { Typography } from '@mui/material';
import theme from '@/src/theme/theme';

const poiret = Poiret_One({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: ['400']
});

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	display: 'swap'
});

export const Text = ({ children, accent, ...props }) => {
	const textStyle = accent ? poiret.style : montserrat.style;

	return (
		<Typography {...props} sx={{ ...textStyle, ...props.sx, fontWeight: accent ? 400 : 300 }}>
			{children}
		</Typography>
	);
};

export const Gr = props => <span style={{ color: theme.palette.primary.main }}>{props.children}</span>;
export const Bl = props => <span style={{ color: theme.palette.secondary.main }}>{props.children}</span>;

export const SectionName = props => (
	<Text accent variant={'h2'} component={'h1'} {...props}>
		{props.children}
	</Text>
);
