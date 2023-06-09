'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';
import Meme from '@/src/ui/meme';

const ProcrastinationVsLaziness = props => {
	return (
		<section {...props}>
			<Paragraph fontWeight={500}>Чем прокрастинация отличается от лени?</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Прокрастинация:
				</Text>
				<br />
				{`•\tСвязана с откладыванием конкретных задач или обязательств на потом.
•\tЧасто вызвана страхом перед неудачей, перфекционизмом, тревогой или низкой самооценкой.
•\tПрокрастинаторы могут быть активными и занятыми другими делами, но они уклоняются от выполнения конкретных важных задач.
`}
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Лень:
				</Text>
				<br />
				{`•\tЯвляется общим нежеланием работать или прикладывать усилия.
•\tЛенивые люди склонны к бездействию и отсутствию активности, не занимаясь ни одной из своих задач.
`}
			</Paragraph>
			<Paragraph>
				В то время как прокрастинация характеризуется уклонением от конкретных задач, лень проявляется в общем нежелании
				прилагать усилия и заниматься активностями.
			</Paragraph>
			<Meme src={'/images/procrastination/4.jpeg'} width={'50%'} />
		</section>
	);
};

export default ProcrastinationVsLaziness;
