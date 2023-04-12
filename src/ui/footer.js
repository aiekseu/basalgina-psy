import React from 'react';
import { Bl, Text } from '@/src/ui/text';

const Footer = () => {
	return (
		<footer style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Text py={8} textAlign={'center'}>
				Подробно о своей практике и о себе рассказываю в инстаграме{' '}
				<a href={'https://instagram.com/basalgina'}>
					<Bl>@basalgina</Bl>
				</a>
			</Text>
		</footer>
	);
};

export default Footer;
