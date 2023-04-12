'use client';

import React from 'react';
import { Text } from '@/src/ui/text';
import ctaLine from '@/public/lines/cta-line.svg';
import tg from '@/public/icons/tg.svg';
import whatsapp from '@/public/icons/whatsapp.svg';
import Image from 'next/image';

const CTA = ({ style }) => {
	return (
		<div
			style={{
				width: '100%',
				marginTop: 24,
				...style
			}}
		>
			<Text accent textAlign={'center'} variant={'h4'} lineHeight={0.1}>
				запись на диагностику
			</Text>
			<Image
				src={ctaLine}
				alt={'ctaLine'}
				width={280}
				height={1}
				sizes='100vw'
				style={{
					width: '60%',
					height: '1px',
					marginLeft: '24%'
				}}
			/>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: 8
				}}
			>
				<Image
					src={tg}
					alt={'tg_icon'}
					width={32}
					height={32}
					sizes='100vw'
					style={{
						width: '32px',
						height: '32px'
					}}
				/>
				<Text
					component={'a'}
					href={'https://t.me/basalgina'}
					target={'_blank'}
					sx={{
						ml: 2,
						cursor: 'pointer',
						textDecoration: 'none',
						borderBottom: '1px dashed transparent',
						borderImage:
							'linear-gradient(90deg, rgba(65,65,65,0) 0%, rgba(75,135,200,.5) 17%, rgba(75,135,200,.5) 24%, rgba(75,135,200,.5) 100%)',
						borderImageSlice: 1
					}}
				>
					t.me/basalgina
				</Text>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: 16
				}}
			>
				<Image
					src={whatsapp}
					alt={'whatsapp_icon'}
					width={32}
					height={32}
					sizes='100vw'
					style={{
						width: '32px',
						height: '32px'
					}}
				/>
				<Text
					component={'a'}
					href={'https://wa.me/79827547598'}
					target={'_blank'}
					sx={{
						ml: 2,
						cursor: 'pointer',
						textDecoration: 'none',
						borderBottom: '1px dashed transparent',
						borderImage:
							'linear-gradient(90deg, rgba(65,65,65,0) 0%, rgba(75,135,200,.5) 17%, rgba(75,135,200,.5) 24%, rgba(75,135,200,.5) 100%)',
						borderImageSlice: 1
					}}
				>
					+7 982 754 75 98
				</Text>
			</div>
		</div>
	);
};

export default CTA;
