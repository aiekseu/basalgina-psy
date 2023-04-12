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
			<Text pt={8} textAlign={'center'}>
				Подробно о своей практике и о себе рассказываю в инстаграме*{' '}
				<a href={'https://instagram.com/basalgina'} target={'_blank'}>
					<Bl>@basalgina</Bl>
				</a>
			</Text>
			<Text style={{ fontSize: '0.5rem', paddingBottom: 64 }}>
				*Признана экстремистской организацией и запрещена на территории РФ
			</Text>
			<div
				style={{
					background: '#eaeaea',
					width: '100%',
					paddingTop: 16,
					paddingBottom: 16
				}}
			>
				<Text
					variant={'body2'}
					style={{
						textAlign: 'center',
						fontSize: '0.7rem'
					}}
				>{`СЗ БАСАЛГИНА ТАТЬЯНА АЛЕКСЕЕВНА\nИНН 590610331533\n2023`}</Text>
			</div>
		</footer>
	);
};

export default Footer;
