'use client';

import { Stack } from '@mui/material';
import { Text } from '@/src/ui/text';
import React from 'react';

const PriceSegment = ({ price }) => {
	return (
		<div
			style={{
				height: '100svh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				overflowX: 'hidden',
				scrollSnapAlign: 'start',
				scrollSnapStop: 'always'
			}}
		>
			<Stack
				direction={'row'}
				alignItems={'end'}
				justifyContent={'space-between'}
				style={{
					width: '100%'
				}}
			>
				<Text accent variant={'h4'}>
					{price.title}
				</Text>
				<Text variant={'body2'}>{price.duration}</Text>
			</Stack>
			<Text textAlign={'justify'} mt={3} width={'100%'}>
				{price.description}
			</Text>
			<Text accent mt={3} variant={'h4'} textAlign={'end'} width={'100%'}>
				{price.cost}
			</Text>
		</div>
	);
};

export default PriceSegment;
