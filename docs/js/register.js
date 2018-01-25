if ('serviceWorker' in navigator  && window.location.href === window.origin+'/') {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js', {scope: "."})
			.then(registration => {
				console.log('SW registered: ', registration, registration.scope);
			}).catch(registrationError => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}