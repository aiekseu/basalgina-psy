'use client';

import React, { useCallback, useEffect, useState } from 'react';
import HeroSection from '@/src/landing-sections/hero/hero';
import WhoIWorkWithSection from '@/src/landing-sections/who-i-work-with/who-i-work-with';
import MyApproachSection from '@/src/landing-sections/my-approach/my-approach';
import PricesSection from '@/src/landing-sections/prices/prices';
import EducationSection from '@/src/landing-sections/education/education';
import LoadingScreen from '@/src/loading';
import Footer from '@/src/ui/footer';
import MobileLikeView from '@/app/mobile-like-view';
import { Analytics } from '@vercel/analytics/react';
import AppThemeProvider from '@/src/theme/theme-provider';

export default function Home() {
	const [loaded, setLoaded] = useState(false);
	const handleLoaded = useCallback(() => {
		setLoaded(true);
	}, []);

	useEffect(() => {
		if (loaded) {
			document.body.style.overflow = 'scroll';
			console.log('Разработка сайта - https://t.me/aiekseu');
		}
	}, [loaded]);

	return (
		<>
			{!loaded && <LoadingScreen />}
			<AppThemeProvider>
				<MobileLikeView>
					<HeroSection />
					<WhoIWorkWithSection />
					<MyApproachSection />
					<PricesSection setLoaded={handleLoaded} />
					<EducationSection />
					<Footer />
				</MobileLikeView>
			</AppThemeProvider>
			<Analytics />
		</>
	);
}
