import React from 'react';
import useIsDesktop from '@/src/hooks/use-desktop';

const Meme = ({ src, width = '75%' }) => {
	const isDesktop = useIsDesktop();

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 8
			}}
		>
			<img
				src={src}
				alt={'funny meme'}
				style={{
					width: isDesktop ? width : '100%'
				}}
			/>
		</div>
	);
};

export default Meme;
