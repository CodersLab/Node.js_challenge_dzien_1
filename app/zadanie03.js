let sum = 0;

process.argv.forEach((val, index) => {
    
    if(index > 1){
        sum += Number.parseInt(val);
    };
    
});

console.log(`Suma wprowadzonych liczb wynosi ${sum}`);