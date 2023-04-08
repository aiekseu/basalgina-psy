'use client';

import React from 'react';
import Text from '..//src/ui/text';
import HeroSection from '@/src/landing-sections/hero/hero';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/src/theme/theme';
import UserGlobalStyles from '@/src/theme/global-styles';
import WhoIWorkWithSection from '@/src/landing-sections/who-i-work-with/who-i-work-with';
import MyApproachSection from '@/src/landing-sections/my-approach/my-approach';
import PricesSection from '@/src/landing-sections/prices/prices';
import EducationSection from '@/src/landing-sections/education/education';

export default function Home() {
	return (
		<main>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<UserGlobalStyles />
				<HeroSection />
				<WhoIWorkWithSection />
				<MyApproachSection />
				<PricesSection />
				<EducationSection />
			</ThemeProvider>
		</main>
	);
}
