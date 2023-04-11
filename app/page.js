'use client';

import React, { useCallback, useEffect, useState } from 'react';
import HeroSection from '@/src/landing-sections/hero/hero';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/src/theme/theme';
import UserGlobalStyles from '@/src/theme/global-styles';
import WhoIWorkWithSection from '@/src/landing-sections/who-i-work-with/who-i-work-with';
import MyApproachSection from '@/src/landing-sections/my-approach/my-approach';
import PricesSection from '@/src/landing-sections/prices/prices';
import EducationSection from '@/src/landing-sections/education/education';
import LoadingScreen from '@/src/loading';

export default function Home() {
	const [loaded, setLoaded] = useState(false);
	const handleLoaded = useCallback(() => {
		setLoaded(true);
	}, []);

	useEffect(() => {
		if (loaded) {
			document.body.style.overflow = 'scroll';
		}
	}, [loaded]);

	return (
		<main>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<UserGlobalStyles />
				{!loaded && <LoadingScreen />}
				<HeroSection />
				<WhoIWorkWithSection />
				<MyApproachSection />
				<PricesSection setLoaded={handleLoaded} />
				<EducationSection />
			</ThemeProvider>
		</main>
	);
}
