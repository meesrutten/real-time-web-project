require('dotenv').config()
const express = require('express');
const gzip = require('compression');
const request = require('request');
const app = express();
const PORT = process.env.port || 8000;
const Twitter = require('twitter');
const words = require('naughty-words');
const NodeGeocoder = require('node-geocoder');
const _isEqual = require('lodash.isequal');
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const options = {
	provider: 'google',

	// Optional depending on the providers
	httpAdapter: 'https', // Default
	apiKey: process.env.GOOGLE_GEOCODER_API_KEY3, // for Mapquest, OpenCage, Google Premier
	formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// gzip
app.use(gzip({
	threshold: 0,
	filter: () => true, // Compress all assets by default
}));

app.get('/', function (req, res) {
	res.render('index');
});

const cusswordsArray = words.en
const cusswordsString = String(cusswordsArray.join(','))

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

io.on('connection', function (socket) {
	socket.on('disconnect', function () { 
		console.log('disconnected');
	 });

	socket.on('searchValue', function(data){
		let searchVal = String(data.value);
		const locationWithMagn = [[52.370216, 4.895168, 0.015728264767662276]];
		/**
		 * Stream statuses filtered by keyword
		 * number of tweets per second depends on topic popularity
		 **/
		client.stream('statuses/filter', { track: searchVal, locations: '' }, function (stream) {
			stream.on('data', function (tweet) {
				if (tweet.geo !== null && typeof tweet.geo !== 'undefined') {
					// console.log(tweet.geo.coordinates);
					const tweetLong = tweet.geo.coordinates[0]; 
					const tweetLat = tweet.geo.coordinates[1];
					// console.log(tweetLong, tweetLat);
					// addToArrayIfUnique(tweetLat, tweetLong)
					geocoder.geocode(tweetLocation)
						.then(function (res) {
							if (typeof res[0] !== 'undefined') {
								const tweetLat = res[0].latitude;
								const tweetLong = res[0].longitude;
								addToArrayIfUnique(tweetLat, tweetLong)
							}
						})
						.catch(function (err) {
							console.log(err);
						});
				}
				if (tweet.user && tweet.user.location !== null) {
					let tweetLocation = tweet.user.location;
					// console.log(tweet);
					if (typeof tweetLocation !== 'undefined') {
						geocoder.geocode(tweetLocation)
							.then(function (res) {
								if (typeof res[0] !== 'undefined') {
									const tweetLat = res[0].latitude;
									const tweetLong = res[0].longitude;
									addToArrayIfUnique(tweetLat, tweetLong)
								}
							})
							.catch(function (err) {
								console.log(err);
							});
					}
				}
			});

			stream.on('error', function (error) {
				console.log(error);
			});
		});

		let increment = 0
		// setInterval(function(){
		// 	getRandomInRange(-180, 180, 3);
		// }, 500)
		// function getRandomInRange(from, to, fixed) {
		// 	// .toFixed() returns string, so ' * 1' is a trick to convert to number
		// 	const lat = (Math.random() * (to - from) + from).toFixed(fixed) * 1;
		// 	const long = (Math.random() * (to - from) + from).toFixed(fixed) * 1;
		// 	addToArrayIfUnique(lat, long)
		// }
		// console.log();
		function addToArrayIfUnique(latitude, longitude) {
			const lat = latitude;
			const long = longitude;
			for (let i = 0; i < locationWithMagn.length; i++) {
				const arrLat = locationWithMagn[i][0] || 0;
				const arrLong = locationWithMagn[i][1] || 0;
				const matches = _isEqual([arrLat, arrLong], [lat, long]);
				if (matches) {
					//Adds to magnitude
					locationWithMagn[i][2] += 0.010;
					// socket.emit('locationUpdate', { data: locationWithMagn })
					if (locationWithMagn.length >= (increment * 10)) {
						socket.emit('locationUpdate', { data: locationWithMagn });
						increment += 1
					}
					// console.log(locationWithMagn);
					break;
				}
				else {
					// Add new location to array
					locationWithMagn.push([lat, long, 0.010])
					if (locationWithMagn.length >= (increment * 10)) {
						socket.emit('locationUpdate', { data: locationWithMagn });

						increment += 1
					}
					break;
				}
			}
		}

	})
})

// app.get('/:id', function (req, res) {
// 	const pageContent = getPageContent(req.params.id)
// 	res.render('article', { data: pageContent });
// });

server.listen(PORT, function () {
	console.log('server is running on port 8000');
})