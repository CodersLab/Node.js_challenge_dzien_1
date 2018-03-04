//Twój kod

const sec = 1000;
let argv = process.argv;

    for (let i = 2; i < argv.length; i++)
    	showText(Number(argv[i]));

    function showText(time) {
        	setTimeout(() => {
            		console.log(time);
            	}, time * sec);
        }