import React, { createRef, useState } from 'react';
import CTA from '@/src/ui/cta';
import { Bl, SectionName, Text } from '@/src/ui/text';
import Image from 'next/image';
import theme from '@/src/theme/theme';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import close from '../../../public/icons/close.svg';
import useIsDesktop from '@/src/hooks/use-desktop';

export const educationRef = createRef();

const EducationSection = () => {
	const [diploma, setDiploma] = useState(null);
	const [openDialog, setOpenDialog] = useState(false);
	const handleOpenDiploma = diploma => {
		setDiploma(diploma);
		setOpenDialog(true);
	};
	const handleCloseDiploma = () => setOpenDialog(false);

	const isDesktop = useIsDesktop();

	return (
		<>
			<section ref={educationRef}>
				<Image
					width={450}
					height={500}
					src={'/images/anxiety.jpg'}
					alt={'anxiety photo'}
					style={{
						transform: 'translateY(-12px)',
						width: '100%',
						height: 'auto',
						overflow: 'hidden',
						objectFit: 'cover'
					}}
				/>
				<div style={{ paddingLeft: 24, paddingRight: 24 }}>
					<CTA />
					<SectionName style={{ marginTop: 32 }}>
						Образование <Bl>&</Bl> дипломы
					</SectionName>
					<DiplomaContainer
						style={{ marginTop: 32 }}
						// onClick={() => handleOpenDiploma({ title: 'Высшая Школа Психологии', url: '/diplomas/hsp.jpg' })}
					>
						<DiplomaImage />
						<Text textAlign={'justify'} width={'50%'} variant={'body2'}>
							Высшая Школа Психологии, «Психологическое консультирование» (профессиональная переподготовка, 1050 ак. ч)
							{'\n'}
							2021 - 2023.
						</Text>
					</DiplomaContainer>
					<DiplomaContainer
						style={{ marginTop: 24 }}
						onClick={() => handleOpenDiploma({ title: 'АСТ-подход, член АКПН', url: '/diplomas/akpn.jpg' })}
					>
						<Text textAlign={'center'} width={'50%'} variant={'body2'}>
							АСТ-подход,
							{'\n'}член АКПН
						</Text>
						<DiplomaImage second url={'/diplomas/akpn.jpg'} />
					</DiplomaContainer>
					<DiplomaContainer
						style={{ marginTop: 24 }}
						onClick={() =>
							handleOpenDiploma({
								title: 'Конференции по Терапии Принятия и Ответственности',
								url: '/diplomas/conf3.jpg'
							})
						}
					>
						<DiplomaImage url={'/diplomas/conf3.jpg'} />
						<Text textAlign={'center'} width={'50%'} variant={'body2'}>
							Конференции по Терапии Принятия и Ответственности
						</Text>
					</DiplomaContainer>
				</div>
			</section>

			<Dialog
				fullScreen={!isDesktop}
				open={openDialog}
				onClose={handleCloseDiploma}
				sx={{
					'.MuiPaper-root': {
						background: '#f3f3f3',
						width: isDesktop ? '600px' : '100%'
					}
				}}
			>
				<DialogContent>
					<Text mt={isDesktop ? 0 : '20%'}>{diploma?.title ?? ''}</Text>
					<div style={{ width: '100%', marginTop: 24 }}>
						<Image
							width={300}
							height={200}
							src={diploma?.url}
							alt={diploma?.title}
							style={{ height: '100%', width: '100%', border: 'none' }}
						/>
					</div>
				</DialogContent>
				<IconButton
					style={{
						position: 'absolute',
						top: 4,
						right: 4
					}}
					onClick={handleCloseDiploma}
				>
					<img src={close.src} width={32} height={32} />
				</IconButton>
			</Dialog>
		</>
	);
};

const DiplomaContainer = props => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			...props.style
		}}
		onClick={props.onClick}
	>
		{props.children}
	</div>
);

const DiplomaImage = ({ second, url }) => {
	return (
		<div
			style={{
				width: '45%',
				height: 'auto',
				aspectRatio: '1.41 / 1',
				padding: 4,
				transform: `rotate(${second ? '5deg' : '-8deg'})`,
				border: `1px dashed ${theme.palette.secondary.main}`,
				borderRadius: 8,
				transition: 'transform .5s ease-in',
				cursor: 'pointer',
				':hover': {
					transform: `rotate(${second ? '7deg' : '-10deg'})`
				}
			}}
		>
			{url ? (
				<div
					style={{
						width: second ? '97%' : '95%',
						height: second ? '97%' : '95%',
						transform: `rotate(${second ? '3deg' : '2deg'})`,
						borderRadius: 8,
						backgroundImage: `url(${url})`,
						backgroundSize: 'cover'
					}}
				/>
			) : (
				<Text style={{ height: '100%', width: '100%', textAlign: 'center' }}>скоро тут будет диплом</Text>
			)}
		</div>
	);
};
export default EducationSection;
