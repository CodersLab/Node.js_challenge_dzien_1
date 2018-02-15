        process.argv.splice(2).map(number => (
            setTimeout(()=> {
                console.log(number);
                }, parseInt(number)* 1000)
)
);


