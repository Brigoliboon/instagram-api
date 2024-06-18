const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=mrbeast';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c9cdd05598msh1a32ee749cecb5ap103ba9jsn166ffeb04d32',
		'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
