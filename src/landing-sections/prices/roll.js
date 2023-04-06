import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { bigRoll } from '@/public/spritesheets';
import Image from 'next/image';
import { pricesRef } from '@/src/landing-sections/prices/prices';

const FRAMES_NUMBER = 55;

const Roll = () => {
	const [frame, setFrame] = useState(0);
	const [offset, setOffset] = useState(0);
	const [componentOffset, setComponentOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.scrollY);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (pricesRef.current) {
			setComponentOffset(pricesRef.current.offsetTop);
		}
	}, [pricesRef]);

	useEffect(() => {
		if (offset >= componentOffset) {
			const height = document.body.scrollHeight - componentOffset - window.innerHeight;
			const step = height / FRAMES_NUMBER;
			const newFrame = Math.floor((offset - componentOffset) / step);
			setFrame(newFrame < FRAMES_NUMBER ? newFrame : FRAMES_NUMBER - 1);
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
				<Image
					fill
					src={bigRoll[frame]}
					alt={'roll'}
					style={{ objectFit: 'cover', transform: 'scaleY(1.005)', opacity: 0.6 }}
				/>
			</div>
		</div>
	);
};

export default Roll;
