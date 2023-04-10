'use client';

import React from 'react';
import { Bl, SectionName } from '@/src/ui/text';
import Roll from '@/src/landing-sections/prices/roll';
import PriceSegment from '@/src/landing-sections/prices/price-segment';

export const pricesRef = React.createRef();

const prices = [
	{
		title: '1. психодиагностика',
		duration: '15 минут',
		description:
			'Цель: кратко узнать ваш запрос и ожидания от терапии. На этой встрече мы можем предварительно понять, подходим ли мы друг другу.\n' +
			'\n' +
			'В случае, если вы записываетесь на первую сессию, отправляю документ «контракт ответственности», где более подробно прописаны правила работы.',
		cost: 'бесплатно'
	},
	{
		title: '2. первая сессия',
		duration: '80 минут',
		description:
			'Обсуждения правил терапии, прописанных в контракте\n\n' +
			'Формулировка вашего запроса и определение стратегии работы',
		cost: '3500 рублей'
	},
	{
		title: '3. следующие сессии',
		duration: '50 минут',
		description: 'какой-нибудь текст. чуток',
		cost: '3000 рублей'
	},
	{
		title: '4. пакет на месяц',
		duration: '4 сессии',
		description: 'При единоразовой оплате месячной терапии',
		cost: '11000 рублей'
	}
];

const PricesSection = () => {
	return (
		<>
			<section ref={pricesRef}>
				<Roll />
				<div
					style={{
						padding: 24,
						transform: 'translateY(-20vh)'
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
		</>
	);
};

export default PricesSection;
