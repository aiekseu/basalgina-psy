import React, { createRef } from 'react';

export const educationRef = createRef();

const EducationSection = () => {
	return (
		<div
			ref={educationRef}
			style={{
				background: '#ffcfcf',
				height: '70svh',
				scrollSnapAlign: 'center'
			}}
		>
			Образование
		</div>
	);
};

export default EducationSection;
