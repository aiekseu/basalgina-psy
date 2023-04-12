'use client';

import React from 'react';
import { Bl, SectionName } from '@/src/ui/text';
import Roll from '@/src/landing-sections/prices/roll';
import PriceSegment from '@/src/landing-sections/prices/price-segment';
import CTA from '@/src/ui/cta';
import Image from 'next/image';
import useIsDesktop from '@/src/hooks/use-desktop';

export const pricesRef = React.createRef();

const prices = [
	{
		title: '1. психодиагностика',
		duration: '15 минут',
		description:
			'Цель: кратко узнать ваш запрос и ожидания от терапии. На этой встрече мы можем предварительно понять, подходим ли друг другу.\n' +
			'\n' +
			'В случае, если вы записываетесь на первую сессию, отправляю документ «Контракт ответственности», где более подробно прописаны правила работы.',
		cost: 'бесплатно'
	},
	{
		title: '2. первая сессия',
		duration: '80 минут',
		description:
			'– обсуждаем правила терапии, прописанные в контракте\n\n' +
			'– детально прорабатываем ваш запрос\n\n' +
			'– определяем стратегию совместной работы',
		cost: '3500 рублей'
	},
	{
		title: '3. следующие сессии',
		duration: '50 минут',
		description: '– ведётся работа согласно стратегии\n\n' + '– оптимальная частота сессий: 1 раз в неделю',
		cost: '3000 рублей'
	},
	{
		title: '4. пакет на месяц',
		duration: '4 сессии',
		description: 'при единоразовой оплате',
		cost: '11000 рублей'
	}
];

const PricesSection = ({ setLoaded }) => {
	const isDesktop = useIsDesktop();

	return (
		<section ref={pricesRef}>
			<Roll setLoaded={setLoaded} />
			<div
				style={{
					padding: 24,
					transform: isDesktop ? 'none' : 'translateY(-16vh)'
				}}
			>
				<SectionName>
					Фор<Bl>м</Bl>ат работы
				</SectionName>
				{prices.map((price, index) => (
					<PriceSegment key={price.title} price={price} first={index === 0} />
				))}
			</div>
		</section>
	);
};

export default PricesSection;
