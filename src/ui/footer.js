import React from 'react';
import { Bl, Text } from '@/src/ui/text';

const Footer = () => {
	return (
		<footer
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			<Text py={8} textAlign={'center'}>
				Подробно о своей практике и о себе рассказываю в инстаграме{' '}
				<a href={'https://instagram.com/basalgina'}>
					<Bl>@basalgina</Bl>
				</a>
			</Text>
			<div
				style={{
					background: '#eaeaea',
					width: '100%'
				}}
			>
				<Text
					variant={'body2'}
					style={{
						textAlign: 'center'
					}}
				>{`СЗ БАСАЛГИНА ТАТЬЯНА АЛЕКСЕЕВНА\nИНН 590610331533\n2023`}</Text>
			</div>
		</footer>
	);
};

export default Footer;
