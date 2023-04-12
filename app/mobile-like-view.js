'use client';
import React from 'react';
import useIsDesktop from '@/src/hooks/use-desktop';

export const MOBILE_WIDTH = 500;

const MobileLikeView = props => {
	const isDesktop = useIsDesktop();

	return (
		<>
			{isDesktop ? (
				<div
					style={{
						maxWidth: MOBILE_WIDTH,
						overflowX: 'hidden',
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
				>
					{props.children}
				</div>
			) : (
				<>{props.children}</>
			)}
		</>
	);
};

export default MobileLikeView;
