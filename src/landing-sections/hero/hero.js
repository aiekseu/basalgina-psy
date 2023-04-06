'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import { Gr, Text } from '@/src/ui/text';
import tanya from '../../../public/images/tanya.jpg';
import line1 from '../../../public/lines/line1.svg';
import line2 from '../../../public/lines/line2.svg';
import line3 from '../../../public/lines/line3.svg';

const HeroSection = () => {
	return (
		<>
			<section
				style={{
					height: '100svh',
					padding: 0,
					position: 'relative',
					overflow: 'hidden',
					scrollSnapAlign: 'start'
				}}
			>
				<div
					style={{
						paddingTop: '35%',
						width: '100%',
						textAlign: 'center',
						position: 'relative'
					}}
				>
					<Text accent variant={'h2'}>
						Т<Gr>а</Gr>
						ня Басалги
						<Gr>н</Gr>а
					</Text>
					<Text accent variant={'h3'} mt={5}>
						пси
						<Gr>х</Gr>
						олог
					</Text>
					<Image
						src={line1}
						alt={'line1'}
						width={250}
						height={80}
						sizes='100vw'
						style={{
							width: '90vw',
							height: 'auto',
							position: 'absolute',
							bottom: 0,
							left: '5vw'
						}}
					/>
				</div>
				<div
					style={{
						position: 'absolute',
						bottom: 0,
						zIndex: -1,
						overflowX: 'hidden'
					}}
				>
					<Image
						src={tanya}
						alt={'my photo'}
						width={400}
						height={600}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto'
						}}
					/>
					<Image
						src={line2}
						alt={'line2'}
						width={250}
						height={100}
						sizes='100vw'
						style={{
							width: 'auto',
							height: '30vh',
							position: 'absolute',
							top: '40%',
							left: '25vw'
						}}
					/>
				</div>
			</section>
			<Image
				src={line3}
				alt={'line3'}
				width={250}
				height={80}
				sizes='100vw'
				style={{
					width: 'auto',
					height: '30vh',
					position: 'absolute',
					bottom: '-6%',
					right: 0
				}}
			/>
		</>
	);
};

export default HeroSection;
