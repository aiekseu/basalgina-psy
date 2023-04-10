export const metadata = {
	title: 'Таня с вас 5 тыщ',
	description: 'с вас 5 тыщ'
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	);
}
