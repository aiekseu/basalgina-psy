'use client';

import React from 'react';
import Paragraph from '@/src/procrastination-page/paragraph';
import { Text } from '@/src/ui/text';

const Tecniques = props => {
	return (
		<section {...props}>
			<Paragraph fontWeight={500}>ПОДДЕРЖИВАЮЩИЕ ТЕХНИКИ:</Paragraph>
			<Paragraph>
				{`1.\tПубличные обязательства: объявите о своих планах и целях перед друзьями или в социальных сетях, чтобы создать дополнительную мотивацию для выполнения задач.

2.\tТехника "помидоро" или «tomatodo»: установите будильник на короткие промежутки времени, например, на 25 минут, и работайте над задачей без отвлечений, пока будильник не прозвонит. Затем возьмите 5-минутный перерыв и повторите.

3.\tВизуализация успеха: представьте, каким будет ваш успех после выполнения задачи, и держите эту картинку в голове, чтобы поддерживать мотивацию.

4.\tТехника "сначала легкое": Начните с выполнения легких и быстрых задач, чтобы "разогреться" и войти в рабочий ритм, затем переходите к более сложным задачам.`}
			</Paragraph>
			<Paragraph>Этого достаточно, чтобы стать ракетой, которую не останавливает прокрастинация. Вперёд!</Paragraph>
		</section>
	);
};

export default Tecniques;
