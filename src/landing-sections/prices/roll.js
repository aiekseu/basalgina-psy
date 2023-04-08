import React, { useEffect, useState } from 'react';
import { bigRoll } from '@/public/spritesheets';
import Image from 'next/image';
import { pricesRef } from '@/src/landing-sections/prices/prices';
import { educationRef } from '@/src/landing-sections/education/education';

const FRAMES_NUMBER = 55;

const Roll = () => {
	const [frame, setFrame] = useState(0);
	const [offset, setOffset] = useState(0);
	const [pricesOffset, setPricesOffset] = useState(0);
	const [educationOffset, setEducationOffset] = useState(0);

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
	}, [pricesRef]);

	useEffect(() => {
		if (offset >= pricesOffset - 0.66 * window.innerHeight) {
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
	}, [offset]);

	return (
		<div
			style={{
				position: 'sticky',
				top: 32,
				overflow: 'hidden',
				height: '90svh',
				width: '95%',
				zIndex: -1
			}}
		>
			<div
				style={{
					position: 'relative',
					width: '100%',
					height: '100%'
				}}
			>
				<Image fill src={bigRoll[frame]} alt={'roll'} style={{ objectFit: 'fill', opacity: 0.5 }} />
			</div>
		</div>
	);
};

export default Roll;
