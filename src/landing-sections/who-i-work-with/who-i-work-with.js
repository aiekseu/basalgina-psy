'use client';

import React from 'react';
import Image from 'next/image';
import { Bl, SectionName, Text } from '@/src/ui/text';
import theme from '@/src/theme/theme';
import line4 from '../../../public/lines/line4.svg';
import line5 from '../../../public/lines/line5.svg';

const data = [
	{
		title: 'С осторожностью беру',
		text:
			'ПТСР, ГТР и не работаю с хроническими психическими расстройствами.\nя консультирующий психолог с не медицинским образованием.'
	},
	{
		title: 'Если у вас другой запрос',
		text: 'обсуждаю каждый случай отдельно, при необходимости рекомендую специалиста по вашему запросу.'
	}
];

const WhoIWorkWithSection = () => {
	return (
		<>
			<section
				style={{
					minHeight: '50vh',
					marginTop: 32,
					padding: 24,
					position: 'relative',
					overflowX: 'hidden'
				}}
			>
				<SectionName pb={2}>
					Ком<Bl>у</Bl> я помогаю
				</SectionName>
				<div style={{ marginTop: 16 }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Text variant={'h6'} fontWeight={200}>
							И с какими запросами работаю
						</Text>
						<div
							style={{
								borderRadius: '100%',
								width: 12,
								height: 12,
								marginLeft: 8,
								opacity: 0.3,
								background: theme.palette.secondary.main
							}}
						/>
					</div>
					<Text ml={'8%'} variant={'body1'} textAlign={'justify'}>
						1. Взаимоотношения
					</Text>
					<Text ml={'18%'} variant={'body2'} textAlign={'start'}>
						{`⁃ отношения с родителями, сепарация
						 ⁃ отношения с партнером (созависимости, измены, неудовлетворенность)
						 ⁃ одиночество
						 ⁃ повторяющиеся негативные сценарии`}
					</Text>
					<Text ml={'8%'} variant={'body1'} textAlign={'justify'}>
						2. Отношение к себе
					</Text>
					<Text ml={'18%'} variant={'body2'} textAlign={'start'}>
						{`⁃ нестабильная самооценка
						 ⁃ поиск себя
						 ⁃ саморазрушающее поведение: «всегда всё порчу», «так ничего и не добилась в жизни»`}
					</Text>
					<Text ml={'8%'} variant={'body1'} textAlign={'justify'}>
						2. Эмоциональные состояния
					</Text>
					<Text ml={'18%'} variant={'body2'} textAlign={'start'}>
						{`⁃ тревога, бессонницы, панические атаки
 						⁃ экологичное проживание эмоций`}
					</Text>
				</div>
				{data.map((item, index) => (
					<div key={item.title} style={{ marginTop: 16 }}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Text variant={'h6'} fontWeight={200}>
								{item.title}
							</Text>
							{new Array(index + 2).fill(0).map((_, index) => (
								<div
									key={`${index}-square`}
									style={{
										borderRadius: '100%',
										width: 12,
										height: 12,
										marginLeft: 8,
										opacity: 0.3,
										background: theme.palette.secondary.main
									}}
								/>
							))}
						</div>
						<Text ml={'18%'} variant={'body2'} textAlign={'justify'}>
							{item.text}
						</Text>
					</div>
				))}
				<Image
					src={line4}
					alt={'line4'}
					width={120}
					height={250}
					style={{
						width: 'auto',
						height: '20vh',
						position: 'absolute',
						top: '3vh',
						right: 0
					}}
				/>
				<Image
					src={line5}
					alt={'line5'}
					width={40}
					height={170}
					style={{
						width: 'auto',
						height: '10vh',
						position: 'absolute',
						left: 0,
						top: '50%'
					}}
				/>
			</section>
		</>
	);
};

export default WhoIWorkWithSection;
