import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { pricesRef } from '@/src/landing-sections/prices/prices';
import { educationRef } from '@/src/landing-sections/education/education';
import rollSpritesheet from '../../../public/spritesheets/spritesheet.png';
import useIsDesktop from '@/src/hooks/use-desktop';
import { MOBILE_WIDTH } from '@/app/mobile-like-view';

const FRAMES_NUMBER = 69;

const Roll = ({ setLoaded }) => {
	const [frame, setFrame] = useState(0);
	const [offset, setOffset] = useState(0);
	const [pricesOffset, setPricesOffset] = useState(0);
	const [educationOffset, setEducationOffset] = useState(0);

	const isDesktop = useIsDesktop();

	useEffect(() => {
		const onScroll = () => setOffset(window.scrollY);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (pricesRef.current && educationRef.current) {
			setPricesOffset(pricesRef.current.offsetTop);
			setEducationOffset(educationRef.current.offsetTop);
		}
	}, []);

	useEffect(() => {
		if (isDesktop) {
			// DESKTOP CALC
			const step = (document.body.scrollHeight - window.innerHeight) / FRAMES_NUMBER;
			let newFrame = Math.floor(offset / step);
			if (newFrame < 0) {
				newFrame = 0;
			} else if (newFrame > FRAMES_NUMBER - 1) {
				newFrame = FRAMES_NUMBER - 1;
			}
			console.log(newFrame);
			setFrame(newFrame);
		} else if (offset >= pricesOffset - 0.66 * window.innerHeight) {
			// MOBILE CALC
			const height = educationOffset - pricesOffset;
			const step = height / FRAMES_NUMBER;
			let newFrame = Math.floor((offset - pricesOffset + 0.66 * window.innerHeight) / step);
			if (newFrame < 0) {
				newFrame = 0;
			} else if (newFrame > FRAMES_NUMBER - 1) {
				newFrame = FRAMES_NUMBER - 1;
			}
			setFrame(newFrame);
		}
	}, [educationOffset, isDesktop, offset, pricesOffset]);

	return (
		<div
			style={{
				position: isDesktop ? 'fixed' : 'sticky',
				top: 0,
				right: 0,
				overflow: 'hidden',
				height: 'calc(100svh - 16px)',
				width: isDesktop ? `min(calc(50vw - ${MOBILE_WIDTH / 2}px), 600px)` : '100vw',
				zIndex: -1
			}}
		>
			<Image
				priority
				unoptimized
				src={rollSpritesheet}
				alt={'roll'}
				quality={100}
				style={{
					transform: isDesktop ? `translateX(${(-frame * 100) / FRAMES_NUMBER}%)` : `translateX(${-frame * 100}vw)`,
					width: isDesktop ? `${FRAMES_NUMBER * 100}%` : `${FRAMES_NUMBER * 100}vw`,
					height: '100%',
					objectFit: 'fit',
					opacity: 0.5
				}}
				onLoadingComplete={() => {
					setLoaded();
				}}
			/>
		</div>
	);
};

export default Roll;
