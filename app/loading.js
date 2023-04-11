import React from 'react';
import Image from 'next/image';

const Loading = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100svh'
			}}
		>
			<Image width={150} height={73} src={'/loading.gif'} alt={'loading_roll'} />
		</div>
	);
};

export default Loading;
