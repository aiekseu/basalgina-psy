'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';

const Checklist = props => {
	return (
		<section {...props}>
			<Paragraph>{`Подготовились теоретически, теперь даю сам чек-лист работы с прокрастинацией, он состоит из 5 шагов:
1)	Чистим инфополе
2)	Освобождаем голову
3)	Отдыхаем по-настоящему
4)	Правильно ставим цели
5)	Выполняем единственное базовое упражнение

Раскрою каждый пункт по порядку.

`}</Paragraph>
		</section>
	);
};

export default Checklist;
