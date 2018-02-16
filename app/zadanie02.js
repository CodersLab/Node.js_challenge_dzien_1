let sec = 1000,
	arr = [
		{
			txt: 'Node.js',
			delay: 4,
		},
		{
			txt: 'się',
			delay: 1,
		},
		{
			txt: 'Witam',
			delay: 0,
		},
		{
			txt: 'i korzystam',
			delay: 6,
		},
		{
			txt: 'w konsoli',
			delay: 5,
		},
		{
			txt: 'z funkcji czasu!',
			delay: 7,
		},
		{
			txt: 'z',
			delay: 2,
		},
		{
			txt: 'programem',
			delay: 3,
		},		
	];



arr.forEach(el => {
	showText(el);
});
	
function showText(obj) {
	setTimeout(() => {
		console.log(obj.txt);
	}, obj.delay * sec);
}
// setTimeout(() => {
// 	console.log('Node.js');
// }, 4 * sec);

// setTimeout(() => {
// 	console.log('się');
// }, 1 * sec);

// console.log('Witam');

// setTimeout(() => {
// 	console.log('i korzystam');
// }, 6 * sec);

// setTimeout(() => {
// 	console.log('w konsoli');
// }, 5 * sec);

// setTimeout(() => {
// 	console.log('z funkcji czasu!');
// }, 7 * sec);

// setTimeout(() => {
// 	console.log('z');
// }, 2 * sec);

// setTimeout(() => {
// 	console.log('programem');
// }, 3 * sec);

