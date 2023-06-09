'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';
import Meme from '@/src/ui/meme';

const WhatIsProcrastination = props => {
	return (
		<section {...props}>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Прокрастинация
				</Text>{' '}
				– это откладывание важных или необходимых задач на потом, вместо того чтобы выполнять их сейчас. Это явление
				часто связано с нежеланием сталкиваться с трудностями или страхом перед неудачей. Простыми словами,
				прокрастинация – это {'"'}завтрашний день{'"'} для выполнения задач, которые нужно сделать сегодня.
			</Paragraph>
			<Paragraph fontWeight={500}>10 форм и ситуаций, как проявляется прокрастинация:</Paragraph>
			<Paragraph>{`1.\tОткладывание задач: вы намеренно откладываете выполнение важных задач, заменяя их менее значимыми делами.

2.\tБесконечная подготовка: вы постоянно собираете информацию и готовитесь к выполнению задачи, но так и не начинаете её реально выполнять.

3.\tНеполное выполнение задач: вы начинаете делать задачу, но затем переключаетесь на другую, не закончив первую.

4.\tЧастые перерывы: вы слишком часто делаете перерывы в работе, тратя время на социальные сети, просмотр видео или другие развлечения.

5.\tОжидание "идеальных" условий: вы откладываете начало работы до тех пор, пока не наступят "идеальные" условия, которые, возможно, никогда не наступят.

6.\tОтсутствие планирования: вы не составляете четких планов или графиков для выполнения своих задач, что приводит к хаотичному и неэффективному рабочему процессу.

7.\tСтрах перед неудачей: вы боитесь провала и критики, что приводит к нежеланию начать задачу или довести её до конца.

8.\tПренебрежение сроками: вы игнорируете установленные сроки для выполнения задач, что может вызвать стресс и проблемы в будущем.

9.\tЗацикливание на мелочах: вы тратите много времени на мелкие и незначительные детали, тем самым откладывая выполнение более важных задач.

10.\tОтсутствие приоритетов: вы не определяете приоритеты для своих задач, что затрудняет выбор того, над чем работать в первую очередь.
`}</Paragraph>
			<Paragraph fontWeight={400}>
				Если отметили в своём поведении более 3х схожих пунктов, статья будет для вас актуальной.
			</Paragraph>
			<Meme src={'/images/procrastination/2.jpeg'} width={'50%'} />
		</section>
	);
};

export default WhatIsProcrastination;
