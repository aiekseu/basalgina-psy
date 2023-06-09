'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';

const ClearingHead = props => {
	return (
		<section {...props}>
			<Paragraph fontWeight={500}>ОСВОБОЖДАЕМ ГОЛОВУ</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					В чём суть:
				</Text>{' '}
				У прокрастинаторов и тревожных людей проносятся сотни мыслей в голове ежесекундно. Так работает защитная реакция
				нервной системы – если вам страшно, мозгу посылаются сигналы отвлекать вас любой доступной информацией. Проблема
				в том, что эти мысли только усиливают тревогу, когда вы осознаете, что потеряли много времени за размышлениями
				ни о чём.
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Что делать:
				</Text>
				<br />
				{`1)\tОстановиться и признать: я сейчас думаю ни о чем.
2)\tСразу же остановить поток мыслей, выписав все на листочек или в заметку. Сидите и в течение 5-10 минут пишете, пока не поймете, что всё из себя достали, абсолютно все мысли. Не ранжируйте, не ищите формулировок, это может быть поток несвязного бреда.
3)\tСделайте это своей привычкой каждый раз, когда с вами случается приступ многомыслия.
`}
			</Paragraph>
			<Paragraph>
				<Text fontWeight={500} component={'span'}>
					Какой результат:
				</Text>{' '}
				вы поймете весь объем задач и тревог, которые у вас реально есть. Практика показывает, что их меньше, чем то,
				как преподносит мозг для нас.
			</Paragraph>
		</section>
	);
};

export default ClearingHead;
