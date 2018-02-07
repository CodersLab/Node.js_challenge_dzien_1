for (i = 2; i < process.argv.length; i++) {
        process.argv.map(number => (
            setTimeout(()=> {
                console.log(number);
                }, parseInt(number)* 1000)
)
);

    }

