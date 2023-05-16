export const metadata = {
	title: 'Психолог Таня Басалгина',
	description:
		'для тревожных гиперконтролёров\n' +
		'– про психологию и поиск контакта с собой\n' +
		'– помогаю найти свой темп жизни\n' +
		'запись через психодиагностику ↓\n' +
		'forms.gle/rLRQUWahEVcvw6jw6.',
	other: { 'yandex-verification': '3a6042a7a0841770' }
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	);
}
