import React from 'react';
import { Text } from '@/src/ui/text';

const Paragraph = props => {
	const { children, variant = 'body1', mt = 2, ...restProps } = props;

	return (
		<Text variant={variant} mt={mt} whiteSpace={'pre-wrap'} {...restProps}>
			{children}
		</Text>
	);
};

export default Paragraph;
