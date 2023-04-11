'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Bl, SectionName, Text } from '@/src/ui/text';
import triangles from '../../../public/lines/triangles.svg';
import CTA from '@/src/ui/cta';

const MyApproachSection = () => {
	const ref = useRef();

	return (
		<>
			<section
				ref={ref}
				style={{
					minHeight: '50vh',
					padding: 24,
					position: 'relative',
					overflowX: 'hidden'
				}}
			>
				<div style={{ position: 'relative' }}>
					<SectionName pb={2}>
						Мо<Bl>й</Bl> подход
					</SectionName>
					<Image
						src={triangles}
						alt={'triangles'}
						width={250}
						height={100}
						sizes='100vw'
						style={{
							width: '33%',
							height: 'auto',
							position: 'absolute',
							top: -16,
							right: 0
						}}
					/>
				</div>
				<Text textAlign={'justify'} variant={'body1'}>
					Я работаю в рамках долгосрочной терапии – клиенты на протяжении систематических сессий приобретают новый опыт,
					который важен для глубоких внутренних изменений.
				</Text>
				<Text textAlign={'justify'} variant={'body1'} mt={2}>
					Использую упражнения и техники интегрального подхода в консультировании, телесно-ориентированной терапии,
					работаю с метафорическими ассоциативными картами.
				</Text>
				<CTA />
			</section>
		</>
	);
};

export default MyApproachSection;
