'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';

const ProcrastinationVsLaziness = props => {
	return (
		<section {...props}>
			<Paragraph fontWeight={500}>Чем прокрастинация отличается от лени?</Paragraph>
			<Paragraph>{`Прокрастинация:
•\tСвязана с откладыванием конкретных задач или обязательств на потом.
•\tЧасто вызвана страхом перед неудачей, перфекционизмом, тревогой или низкой самооценкой.
•\tПрокрастинаторы могут быть активными и занятыми другими делами, но они уклоняются от выполнения конкретных важных задач.
`}</Paragraph>
			<Paragraph>{`Лень:
•\tЯвляется общим нежеланием работать или прикладывать усилия.
•\tЛенивые люди склонны к бездействию и отсутствию активности, не занимаясь ни одной из своих задач.
`}</Paragraph>
			<Paragraph>
				В то время как прокрастинация характеризуется уклонением от конкретных задач, лень проявляется в общем нежелании
				прилагать усилия и заниматься активностями.
			</Paragraph>
		</section>
	);
};

export default ProcrastinationVsLaziness;
