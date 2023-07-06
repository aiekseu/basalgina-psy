'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';

const Factors = props => {
	return (
		<section {...props}>
			<Paragraph fontWeight={500}>Какие факторы появления / развития прокрастинации?</Paragraph>
			<Paragraph>{`- в современном мире есть обширная база для прокрастинации – это информационное пространство и зависимость от него. Не всегда эти две проблемы можно отличить, когда речь идёт о человеке, кто страдает от информационной зависимости и прокрастинации. 

- общая тревожность 2020-2023. Мир не тот, что был раньше. Нестабильное психологическое состояние и стресс. Кажется, что прочитать новости именно сейчас – вопрос чрезвычайной важности, дела откладываются на потом.

- психологическая предрасположенность к прокрастинации: возможно, вы не понаслышке знаете про тревожные состояния, перфекционизм, депрессивные состояния. Если так, то работа с психологом над первичными причинами поможет сократить прокрастинацию. 

- отсутствие знаний нормы для вашего отдыха или его низкое качество. Если кто-то отдыхает меньше, чем вы – это не значит, что вам нужно сократить отдых. Отдыхать нужно столько, сколько нужно только вам. Это тот показатель, который точно имеет сравнения. Вы не сможете оценить всю вашу нагрузку и занятость другого человека. Важно ориентироваться на собственные ощущения и позволять себе отдыхать в необходимом количестве. В противном случае время, которое можно было уделить отдыху, вы будете тратить на прокрастинацию и откладывание дел.
`}</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Прокрастинация, перфекционизм и тревожность
				</Text>{' '}
				тесно связаны между собой:
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Прокрастинация
				</Text>{' '}
				— откладывание задач на потом из-за страха перед ними
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Перфекционизм
				</Text>{' '}
				— стремление к идеальному выполнению задач, что может вызывать страх перед неудачей или недостаточным качеством
				работы.
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Тревожность
				</Text>{' '}
				— состояние беспокойства и напряжения, которое может возникать из-за страха перед критикой, неудачей или потерей
				контроля.
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Итог:
				</Text>{' '}
				Когда перфекционисты сталкиваются с задачами, они могут испытывать тревожность из-за страха не соответствовать
				своим высоким стандартам. Эта тревожность в свою очередь может привести к прокрастинации, так как они
				предпочитают отложить задачу, чтобы избежать возможной неудачи или критики.
			</Paragraph>
		</section>
	);
};

export default Factors;
