//Twój kod
// const timeout1 = setTimeout(()=>{
//     console.log("Node.js")
// },4000);
// const timeout2 = setTimeout(()=>{
//     console.log("się")
// },1000);
// const timeout3 = setTimeout(()=>{
//     console.log("Witam")
// },0);
// const timeout4 = setTimeout(()=>{
//     console.log("i korzystam")
// },6000);
// const timeout5 = setTimeout(()=>{
//     console.log("w konsoli")
// },5000);
// const timeout6 = setTimeout(()=>{
//     console.log("z funkcji czasu!")
// },7000);
// const timeout7 = setTimeout(()=>{
//     console.log("z")
// },2000);
// const timeout8 = setTimeout(()=>{
//     console.log("programem")
// },3000);
const text = [`Node.js`, `się`, `Witam`, `i korzystam`, `w konsoli`, `z funkcji czasu!`, `z`, `programem`];
const timer = [4000, 1000, 0, 6000, 5000, 7000, 2000, 3000];
if(text.length == timer.length){
    for(let i=0; i<text.length; i++){
        setTimeout(()=>{
            console.log(text[i])
        },timer[i])
    }
} else {
    console.log(`Tablice nie są równe`)
}


