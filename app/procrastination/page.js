'use client';

import React from 'react';
import MobileLikeView from './borders';
import { Analytics } from '@vercel/analytics/react';
import { Text } from '@/src/ui/text';
import ProcrastinationAppbar from '@/src/procrastination-page/appbar';
import ProcrastinationDisclaimer from '@/src/procrastination-page/1-disclaimer';
import WhatIsProcrastination from '@/src/procrastination-page/2-what-is-procrastination';
import WhatToGet from '@/src/procrastination-page/3-how';
import Factors from '@/src/procrastination-page/4-factors';
import ProcrastinationVsLaziness from '@/src/procrastination-page/5-procr-vs-lazy';
import Checklist from '@/src/procrastination-page/6-checklist';
import Clearing from '@/src/procrastination-page/7-clearing';
import ClearingHead from '@/src/procrastination-page/8-clearing-head';
import Relax from '@/src/procrastination-page/9-relax';
import Goals from '@/src/procrastination-page/10-goals';
import BaseTask from '@/src/procrastination-page/11-base-task';
import Books from '@/src/procrastination-page/13-books';
import Tecniques from '@/src/procrastination-page/12-tecniques';

export default function ProcrastinationPage() {
	return (
		<>
			<MobileLikeView>
				<main style={{ padding: '0px 12px' }}>
					<ProcrastinationAppbar />
					<Text variant={'h3'} component={'h1'} accent>
						Чеклист работы с прокрастинацией
					</Text>
					<ProcrastinationDisclaimer style={{ marginTop: 30 }} />
					<WhatIsProcrastination style={{ marginTop: 30 }} />
					<WhatToGet style={{ marginTop: 30 }} />
					<Factors style={{ marginTop: 30 }} />
					<ProcrastinationVsLaziness style={{ marginTop: 30 }} />
					<Checklist style={{ marginTop: 30 }} />
					<Clearing style={{ marginTop: 30 }} />
					<ClearingHead style={{ marginTop: 30 }} />
					<Relax style={{ marginTop: 30 }} />
					<Goals style={{ marginTop: 30 }} />
					<BaseTask style={{ marginTop: 30 }} />
					<Tecniques style={{ marginTop: 30 }} />
					<Books style={{ marginTop: 30 }} />
				</main>
			</MobileLikeView>
			<Analytics />
		</>
	);
}
