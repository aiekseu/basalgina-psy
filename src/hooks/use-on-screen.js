import { useEffect, useState } from 'react';

const useOnScreen = ref => {
	const [isVisible, setIsVisible] = useState(false);

	const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return isVisible;
};

export default useOnScreen;
