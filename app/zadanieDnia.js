let tab = [...process.argv.slice(2).map(x => Number(x))];

oneSeries = (num) => setTimeout(() => console.log(num), num*num);

sleepSort = (tab) => {
	let fullTime = tab.reduce((x, y) => x + y) * 1000;
	setTimeout(() => tab.forEach(x => oneSeries(x)), fullTime);
}

sleepSort(tab);