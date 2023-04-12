'use client';

import React from 'react';
import Image from 'next/image';
import { Bl, Text } from '@/src/ui/text';
import tanya from '../../../public/images/tanya.jpg';
import line1 from '../../../public/lines/line1.svg';

const HeroSection = () => {
	return (
		<>
			<section
				style={{
					height: '100svh',
					padding: 0,
					position: 'relative',
					overflow: 'hidden',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<div
					style={{
						width: '100%',
						textAlign: 'center',
						position: 'relative',
						paddingTop: 80
					}}
				>
					<Text accent variant={'h2'}>
						Т<Bl>а</Bl>
						ня Басалги
						<Bl>н</Bl>а
					</Text>
					<Image
						src={line1}
						alt={'line1'}
						width={250}
						height={80}
						sizes='100vw'
						style={{
							width: '90%',
							height: 'auto',
							bottom: 0,
							left: '50%',
							transform: 'translateX(-50%)',
							position: 'absolute'
						}}
					/>
					<Text accent variant={'h3'} mt={5}>
						пси
						<Bl>х</Bl>
						олог
					</Text>
				</div>
				<Image
					src={tanya}
					alt={'my photo'}
					width={400}
					height={600}
					sizes='100vw'
					style={{
						width: '100%',
						height: 'auto',
						maxHeight: '75svh',
						flexGrow: 1,
						objectFit: 'cover',
						opacity: 0.9
					}}
				/>
			</section>
		</>
	);
};

export default HeroSection;
