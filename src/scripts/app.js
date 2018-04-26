import testData from "./testdata"
import { constants } from "zlib";

document.body.insertAdjacentHTML('beforeend', `
	<div id="start-screen" style="width: 100vw; height: 100vh; background-color: rgba(50, 50, 50, .8); position: absolute; left: 0; top: 0; z-index: 100000; display: flex; flex-flow: column wrap; justify-content: center; align-content: center; align-items: center;">
		<h2 style="display: block;font-size: 2em; text-align: center">Hey there!</h2>
		<p style="font-size: 2em; text-align: center">This globe displays where certain tweets originated from.</p>
		<p style="font-size: 2em; text-align: center">Just type in the word you want and wait a while!</p>
		<p style="font-weight: 600; font-size: 2em; text-align: center">This is a realtime app, so results may take a while!</p>
		<button onClick="(function(){document.querySelector('#start-screen').remove()})()" style="margin-top: 2rem;display: block;border: 0; background-color: white; color: black; padding: 1em 2em;font-weight: 600; font-size: 1em; text-align: center">Let's go!</button>
	</div>
	`)


if (!Detector.webgl) {
	Detector.addGetWebGLMessage();
} else {

	const socket = io();
	let locations = [];
	const container = document.getElementById('container');
	const globe = new DAT.Globe(container);
	globe.addData(testData, { format: 'magnitude' });
	globe.createPoints();
	globe.animate();
	const searchButton = document.querySelector('#cusswordButton')

	searchButton.addEventListener('click', () => {
		const searchValue = document.querySelector('#cussword').value;
		const num_words = searchValue.trim().split(/\s+/).length;
		if (num_words > 1) {
			alert('Please use 1 word :)')
		} else {
			socket.emit('searchValue', { value: searchValue });
			document.querySelector('[for="cussword"]').innerHTML = searchValue
		}
	})
	// settime(globe, 0)();
	let singleDataArray = [];

	socket.on('locationUpdate', function (data) {
		console.log( 'locationUpdate' )
		singleDataArray = data.data.join()
		let arr = singleDataArray.split(',').map(Number)
		globe.resetData();
		globe.addData(arr, { format: 'magnitude' });
		globe.createPoints();
		globe.animate();
	});

	socket.on('disconnect', (reason) => {
		document.body.insertAdjacentHTML('beforeend', `
		<div id="offline-screen" style="width: 100vw; height: 100vh; background-color: rgba(50, 50, 50, .3); position: absolute; left: 0; top: 0; z-index: 1000; pointer-events: none; display: flex; flex-flow: row wrap; justify-content: center; align-content: center; align-items: center;">
			<p style="font-size: 3em; text-align: center">You seem to be offline!</p>
		</div>
		`)
	});
	socket.on('error', (error) => {
		document.body.insertAdjacentHTML('beforeend', `
		<div id="offline-screen" style="width: 100vw; height: 100vh; background-color: rgba(50, 50, 50, .3); position: absolute; left: 0; top: 0; z-index: 1000; pointer-events: none; display: flex; flex-flow: row wrap; justify-content: center; align-content: center; align-items: center;">
			<p style="font-size: 3em; text-align: center">An error occured. Are you offline?</p>
		</div>
		`)
	});
	socket.on('reconnect', (attemptNumber) => {
		console.log('trying to reconnect');
		if (document.querySelectorAll('#cussword')[0]){
			const searchValue = document.querySelectorAll('#cussword')[0].value;
			socket.emit('searchValue', { value: searchValue });
		}
		if (document.querySelectorAll('#offline-screen')[0]){
			document.querySelectorAll('#offline-screen')[0].remove()
		}
	});

	// removes spikes from globe
	var clearScene = function () {
		var objsToRemove = _.rest(globe.scene.children, 2);
		_.each(objsToRemove, function (object) {
			globe.removeMesh();
		});
	};
}


