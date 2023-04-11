import React from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100svh',
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 999,
				width: '100%',
				background: '#f3f3f3'
			}}
		>
			<Image priority width={150} height={73} src={'/loading.gif'} alt={'loading_roll'} />
		</div>
	);
};

export default LoadingScreen;
