import React from 'react';
import Link from 'next/link';

const ProcrastinationAppbar = () => {
	return (
		<div
			style={{
				height: '64px',
				width: '100%',
				paddingTop: 8,
				paddingBottom: 8,
				display: 'flex',
				alignItems: 'center'
			}}
		>
			<Link href={'/'}>
				<img src={'/icons/back.svg'} alt={'back'} height={28} width={28} />
			</Link>
		</div>
	);
};

export default ProcrastinationAppbar;
