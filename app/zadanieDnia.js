
let display = (sortNumber) => {
    
    let sort = Number.parseInt(sortNumber);
    let sortTime = sort * 1000;

    setTimeout( () => {
        console.log(sort);
    }, sortTime);

};

process.argv.forEach((val, index) => {
    
    if(index > 1){
        display(val)
    };
    
});


