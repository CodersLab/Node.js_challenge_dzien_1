
let display = (time, text) => {
    
    let textTime = Number.parseInt(time);

    setTimeout( () => {
        console.log(text);
    }, textTime);

};

display(4000, 'Node.js');
display(1000, 'się');
display(0, 'Witam');
display(6000, 'i korzystam');
display(5000, 'w konsoli');
display(7000, 'z funkcji czasu');
display(2000, 'z');
display(3000, 'programem');