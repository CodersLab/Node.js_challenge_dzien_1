let tab = process.argv.slice(2).map(x => Number(x));

sleepSort = tab => tab.forEach(x => setTimeout(() => console.log(x), x*1000))

sleepSort(tab);